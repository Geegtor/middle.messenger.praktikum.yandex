import { ChatsController } from "../../../controllers/chats";
import { ModalController } from "../../../controllers/modal";
import Block from "../../../core/base/block";
import { AddChatProps, Chat, User } from "../../../types";
import { connect } from "../../../utils/connect";

interface RemoveUserProps extends AddChatProps {
    users: { title: string; value: number }[]
}

class RemoveUser extends Block {
    constructor(props : RemoveUserProps) {
        super({
            ...props,
            addUser: () => {
                ChatsController.deleteChatUsers({
                    chatId: (<Chat>this.props.currentChat).id,
                    users: [parseInt(this.refs.select.value(), 10)]
                }).catch( e => e.message);

                ModalController.close("remove-user")
            },
            closeHandler: () => {
                ModalController.close("remove-user")
            }
        })
    }

    componentDidMount(): void {
        ChatsController.getUsers((<Chat>this.props.currentChat).id)
            .then( (users)  => {
                this.props.users = users.response.map((user: User) => ({
                    title: user.first_name,
                    value: user.id
                }));
            })
            .catch( e => alert(e.message));
    }

    protected render():string {
        return (`
            <section class="modal">                
                {{{ Select options=users title="Имя пользователя" name="login" ref="select" type="text" }}}
                <br/>
                {{{ SubmitButton label="Удалить" onClick=addUser }}}
                {{{ Button label="Отмена" onClick=closeHandler }}}
            </section>
        `)
    }
}

const HOC = connect( ({ currentChat }) => ({currentChat}))(RemoveUser);
export { HOC as RemoveUser };
