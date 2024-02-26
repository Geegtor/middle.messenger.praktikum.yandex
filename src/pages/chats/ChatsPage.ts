import Block from "../../core/base/block";
import * as styles from "./chats.module.css";
import * as validators from "../../utils/validator";
import { Router } from "../../core/router";
import { ChatsProps } from "../../types";
import { ModalController } from "../../controllers/modal";
import { connect } from "../../utils/connect";
import { ChatsController } from "../../controllers/chats";
import { AuthController } from "../../controllers/auth";

export default class ChatsPage extends Block {
    constructor(props: ChatsProps) {
        super({
            ...props,
            addChat: () => {
                ModalController.show("add-chat", {})
            },
            validate: {
                empty: validators.empty,
            },
            onClick: () => {                
                Router.go("/settings");
            }
        })
    }

    componentDidMount(): void {
        ChatsController.getChats().catch(e => alert(e));
        AuthController.getUserInfo().catch(e => alert(e));
    }
        
    protected render():string {
        return (`
            <div class="${styles.container}">
                <div class="${styles.list}">
                    {{{ Link onClick=onClick text="Профиль"}}}
                    {{{ Button label="Добавить чат" onClick=addChat }}}
                    <div class="${styles.inputContainer}">
                        <label class="${styles.label}">
                            <input 
                                class="${styles.input}"
                                name="search"
                                placeholder="Поиск"
                            />
                        <label/>
                    </div>
                    {{{ ChatsList }}}
                </div>
                <div class="${styles.chat}">
                    {{{ ChatMessenger }}}
                </div>
            </div>                
        `)
    }

}

const MSNGR = connect( ({ chats }) => ( { chats }))(ChatsPage);
export { MSNGR as ChatsPage };
