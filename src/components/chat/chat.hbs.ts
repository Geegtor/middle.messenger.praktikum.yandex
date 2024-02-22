import * as styles from "./chat.module.css"
import { ChatsController } from "../../controllers/chats";
import Block from "../../core/base/block";
import WS from "../../core/base/ws-transport";
import { Store } from "../../core/store";
import { Chat, Indexed, MessageCard } from "../../types";
import { connect } from "../../utils/connect";
import { Input } from "..";

interface ChatMessengerProps extends Indexed {
    chat: Chat,
    token: string,
    userId: number,
    messages: MessageCard,
    onMenu: (e: MouseEvent) => void,
    isMenuOpened: boolean
}

class ChatMessenger extends Block {
    constructor(props: ChatMessengerProps) {
        super({
            ...props,
            menuHandler: () => {
                Store.set({ isMenuOpened: true })
            },
            sendMessage: () => {
                if ((this.refs.message as Input).value()) {
                    WS.sendMessage((this.refs.message as Input).value());
                }
            }
        });

        if (props.chat) {
            ChatsController.getChatToken(props.chat.id)
                .then((token) => Store.set({ token: token.response.token }))
                .catch(e => alert(e.message))
        }
    }

    protected render() {
        return (`
        <div class="${styles.chat}">
        {{#if chat}}
            <header class="${styles.chatHeader}">
                <div class="${styles.contactInfo}">

                    <div class="${styles.contactAvatar}">
                        {{#if chat.avatar}}
                        <div class=${styles.contactAvatar}
                            style="background-image: url(https://ya-praktikum.tech/api/v2/resources{{chat.avatar}}); background-size: cover;">
                        </div>
                        {{else}}
                        <div class="icon-no-photo"></div>
                        {{/if}}
                    </div>

                    <div class="${styles.contactName}">
                        {{chat.title}}
                    </div>
                </div>

                <div class="${styles.menuButton}">
                    {{{ Button label="ooo" arrow="true" onClick=menuHandler }}}
                </div>
            </header>

            <div class="${styles.listContent}">
                {{#each messages}}
                {{{ MessageCard isMine=isMine text=text time=time userName=userName }}}
                {{/each}}
            </div>

            <div>
            </div>
            
            <footer class="${styles.footer}">
                {{{ Button arrow="arrow" label="@" onClick=attachClickHandler }}}
                {{{ Input ref="message" message="message"  label ="" }}}
                {{{ Button  arrow="arrow" label="->" onClick=sendMessage }}}
            </footer>

            {{{ MenuPopup ref="contextPopup" }}}
        {{else}}
            <div>Выберите чат</div>
        {{/if}}
        </div>
        `)
    }
}

const HOC = connect( (state) => ({
    chat: state.currentChat,
    token: state.token,
    userId: state.user?.id,
    messages: state.messages,
    isMenuOpened: state.isMenuOpened,
}))(ChatMessenger);
export { HOC as ChatMessenger };
