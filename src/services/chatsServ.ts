import { HTTP } from "../core/base/http-transport";
import { Chat, User } from "../types";

type HttpMethodResp<T> = Promise<{ status: number, response: T }>;

class ChatsService {
    getChats() {
        return HTTP.get(HTTP.buildURL("chats"), {
            headers: { "Content-Type": "application/json" },
        }) as HttpMethodResp<Chat[]>
    }

    addUsers(data: {
        users: number[];
        chatId: number;
      }) {
        return HTTP.put(HTTP.buildURL("chats/users"), {
            headers: { "Content-Type": "application/json" },
            data,
        })
    }

    getChatUsers(chatId: number) {
        return HTTP.get(HTTP.buildURL(`chats/${chatId}/users`), {
            headers: { "Content-Type": "application/json" }
        }) as HttpMethodResp<User[]>
    }

    deleteChatUsers(data:{
        users: number[];
        chatId: number;
      }) {
        return HTTP.delete(HTTP.buildURL("chats/users"), {
            headers: { "Content-Type": "application/json" },
            data,
        })
      }

    getChatToken(chatId: number) {
        return HTTP.post(HTTP.buildURL(`chats/token/${chatId}`), {
            headers: { "Content-Type": "application/json" }
        }) as HttpMethodResp<{token: string}>
    }

    addChat(name: string) {
        return HTTP.post(HTTP.buildURL("chats"), {
            headers: { "Content-Type": "application/json" },
            data: { title: name}
        })
    }

    deleteChat(chatId: number) {
            return HTTP.delete(HTTP.buildURL("chats"), {
            headers: { "Content-Type": "application/json" },
            data: { chatId }
        })
    }

    setAvatar(chatId: number, file: File) {
        const formData = new FormData();
        formData.append("avatar", file);
        formData.append("chatId", chatId.toString())

        return HTTP.put(HTTP.buildURL("chats/avatar"), {
            headers: { "Content-Type": "application/json" },
            data: formData,
        }) as HttpMethodResp<Chat>
    }
} 

const CHATS = new ChatsService();
export { CHATS as ChatsService};
