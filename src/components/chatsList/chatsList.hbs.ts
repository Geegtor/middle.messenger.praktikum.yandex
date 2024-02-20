import { ChatsController } from "../../controllers/chats";
import Block from "../../core/base/block";
import WS from "../../core/base/ws-transport";
import { Store } from "../../core/store";
import { Chat, Indexed, Message, Resp, User } from "../../types";
import { connect } from "../../utils/connect";
import { formatDateTime } from "../../utils/handleDate";

interface ChatsProps extends Indexed {
    user: User,
    chats: Chat[],
    currentChat: Chat,
    chatSelect: (chat: Chat) => void,
}

class ChatsList extends Block {
    constructor(props: ChatsProps) {
        super({
            ...props,
            chatSelect: (chat: Chat) => {
                if (chat.id !== (<Chat>this.props.currentChat)?.id) {
                    Store.set({ messages: []});
                    Store.set({ currentChat: chat });
                    this.chatConnect(chat)
                }
            }
        })
    }
    public chatConnect(chat: Chat) {
        ChatsController.getChatToken(chat.id)
            .then( token => {
                Store.set({ token: (<Resp>token).response.token }); 
                ChatsController.getUsers(chat.id)
                    .then( (data) => {
                        const users = (<Resp>data).response;
                        const messages = (messages: Message[]) => {
                            const newMessages = messages.map(m => ({
                                userName: users.find((u: User) => u.id == m.user_id)?.login,
                                text: m.content,
                                time: formatDateTime(m.time),
                                isMine: m.user_id === (<User>this.props.user).id
                            }));
                            Store.set({ messages: [...newMessages, ...Store.getState().messages]})
                        };
                        WS.connect((<User>this.props.user).id, chat.id, (<Resp>token).response.token, messages);
                    })
                    .catch(e => alert(e.meesage));
            })
            .catch(e => alert(e.meesage));
    }
    protected render():string {
        return (`
            <div class="chats-list">
                {{#each chats}}
                {{{ ChatCard chat=this onSelect=../chatSelect }}}
                {{/each}}
            </div>
        `)
    }
}

const CHATSLISTS = connect( ({currentChat ,user, chats}) => ( { currentChat, user, chats}) )(ChatsList)
export { CHATSLISTS as ChatsList }
