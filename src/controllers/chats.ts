import { Store } from "../core/store";
import { ChatsService } from "../services/chatsServ";

class ChatsController {
    getChats() {
        return ChatsService.getChats()
            .then( data => Store.set({ chats: data.response}) )
    }

    addUser(data:{
        users: number[];
        chatId: number;
      }) {
        return ChatsService.addUsers(data);
    }

    getUsers(chatId: number) {
        return ChatsService.getChatUsers(chatId);
    }

    deleteChatUsers(data: {
        users: number[];
        chatId: number;
      }) {
        return ChatsService.deleteChatUsers(data);
    }

    getChatToken(chatId: number) {
        return ChatsService.getChatToken(chatId);
    }

    addChat(name: string) {
        return ChatsService.addChat(name);
    }

    deleteChat(id: number) {
        return ChatsService.deleteChat(id);
    }

    setAvatar(chatId: number, file:File) {
        return ChatsService.setAvatar(chatId, file);
    }
}

const CHATS = new ChatsController();
export { CHATS as ChatsController }
