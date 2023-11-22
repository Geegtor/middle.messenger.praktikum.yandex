import Block from "../../core/block";

class ChatsList extends Block {
    static name = "ChatList"
    protected render():string {
        return (`
            {{#each chats}}
                {{{ ChatCard unred=this.unred time=this.time chatID=this.chatID message=this.message}}}
            {{/each}}
        `)
    }
}
export default ChatsList;
