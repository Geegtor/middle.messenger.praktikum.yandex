import { ChatsController } from "../../../controllers/chats";
import { ModalController } from "../../../controllers/modal";
import { UserController } from "../../../controllers/user";
import Block from "../../../core/base/block";
import { AddChatProps, Chat } from "../../../types";
import { connect } from "../../../utils/connect";


class AddUser extends Block {
    constructor(props : AddChatProps) {
        super({
            ...props,
            addUser: () => {
                UserController.searchUserByLogin((this.refs.login.value()))
                    .then( users => {
                        ChatsController.addUser({ 
                            chatId: (<Chat>this.props.currentChat).id,
                            users: [users[0].id]
                        }).catch(
                            e => alert (e.mesage)
                        )
                    }).catch(
                        e => alert (e.mesage)
                    );
                ModalController.close("add-user")
            },
            closeHandler: () => {
                ModalController.close("add-user")
            }
        })
    }

    protected render():string {
        return (`
            <section class="modal">
                {{{ Input label="Логин пользователя" login="login" ref="login" type="text" }}}
                {{{ SubmitButton label="Добавить" onClick=addUser }}}
                {{{ Button label="Отмена" onClick=closeHandler }}}
            </section>
        `)
    }
}

const HOC = connect( ({ currentChat }) => ({currentChat}))(AddUser);
export { HOC as AddUser };
