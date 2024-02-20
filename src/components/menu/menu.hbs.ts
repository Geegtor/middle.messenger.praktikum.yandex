import { ModalController } from "../../controllers/modal";
import Block from "../../core/base/block";
import { Store } from "../../core/store";
import { Chat, Indexed } from "../../types";
import { connect } from "../../utils/connect";

import * as styles from "./menu.module.css";

interface MenuProps extends Indexed {
    currentChat: Chat,
    isMenuOpened: boolean,
    overlayClicked: () => void,
}

class Menu extends Block {
    constructor(props: MenuProps) {
        super({
            ...props,
            overlayClicked: () => {
                Store.set({isMenuOpened: false})
            },
            addUser: () => {
                Store.set({isMenuOpened: false});
                ModalController.show("add-user", {})
            },
            removeUser: ()=> {
                Store.set({isMenuOpened: false});
                ModalController.show("remove-user", {})
            }
        })
    }

    protected render() {
        return (`
                <div>
                {{#if isMenuOpened}}
                <div>
                    {{{ Overlay onClick=overlayClicked }}}
                    <section class="${styles.chatMenu}">
                        {{{ Button label="Добавить пользователя" onClick=addUser }}}
                        {{{ Button label="Удалить пользователя" onClick=removeUser }}}
                    </section>
                </div>
                {{/if}}
                </div>
        `)
    }
}

const MENU = connect(({ 
    isMenuOpened, 
    currentChat
}) => ({ isMenuOpened, currentChat }))(Menu);
export { MENU as MenuPopup };
