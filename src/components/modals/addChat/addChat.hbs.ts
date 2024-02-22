import { Input } from "../..";
import { ChatsController } from "../../../controllers/chats";
import { ModalController } from "../../../controllers/modal";
import Block from "../../../core/base/block";
import { Store } from "../../../core/store";
import { AddChatProps } from "../../../types";
import { connect } from "../../../utils/connect";


class AddChat extends Block {
    constructor(props : AddChatProps) {
        super({
            ...props,
            addChat: () => {
                ChatsController.addChat((this.refs.name as Input).value() as string)
                .then(() => ChatsController.getChats())
                .catch(e => alert(e.message));
                Store.set({ isMenuOpened: false })
                ModalController.close("add-chat")
            },
            closeHandler: () => {
                ModalController.close("add-chat")
            }
        })
    }

    protected render():string {
        return (`
            <section class="modal">
                {{{ Input label="Название чата" message="message" ref="name" type="text" }}}
                {{{ SubmitButton label="Создать" onClick=addChat}}}
                {{{ Button rrow="true" label="Отмена" onClick=closeHandler}}}
            </section>
        `)
    }
}

const HOC = connect( ({ currentChat }) => ({currentChat}))(AddChat);
export { HOC as AddChat };
