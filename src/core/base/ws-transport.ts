import { Message } from "../../types";
import EventBus from "./event-bus";

class WebSocketTransort extends EventBus {
    private _socket?: WebSocket | null;
    private _interval?: number;
    private _user?: number;
    private _chat?: number;
    private _token?: string;
    private _host: string = "wss://ya-praktikum.tech/ws/";
    private _messages?: (messages: Message[]) => void;

    constructor() {
        super();
        this._addListeners();
    }

    private _addListeners() {
        this._socket?.addEventListener("open", () => {
            console.log();
        })

        this._socket?.addEventListener("message", (event) => {
            try {
                const parsedData = JSON.parse(event.data);
                const type = parsedData.type;

                if (!this._messages || type === "pong" || type === "user connected") {
                    return;
                }
                this._messages(Array.isArray(parsedData) ? (parsedData) : [parsedData]);
            } catch (e) {
                alert(e);
            }
        })

        this._socket?.addEventListener("close", () => {
            clearInterval(this._interval);
        })

        this._socket?.addEventListener("error", (event) => {
            const { message } = event as unknown as { message?: string};
            throw new Error(message);
        })
    }

    private _getMessages() {
        this.sendMessage("", "get old");
    }

    private _waitConnection(send: () => void, interval: number) {
        this._socket?.readyState === 1 ? 
            send() :
            setTimeout(() => this._waitConnection(send, interval), interval)
    }

    public connect(
        user: number,
        chat: number,
        token: string,
        messages?: (messages: Message[]) => void
    ) {
        if (this._user !== user || this._chat !== chat || this._token !== token || this._messages !== messages) {
            this._socket?.close();
            this._socket = null;

            this._messages = messages;
            this._socket = new WebSocket(`${this._host}/chats/${user}/${chat}/${token}`);
            this._addListeners();
            this._getMessages();

            this._interval = setInterval(() => {
                this._socket?.send(JSON.stringify({ type: "ping" }));
            }, 5000);
        }
    }

    public sendMessage(message: string, type: string = "message") {
        this._waitConnection(() => {
            this._socket?.send(JSON.stringify({
                content: message,
                type,
            }))
        }, 1000)
    }
}

const WS = new WebSocketTransort();
export default WS;
