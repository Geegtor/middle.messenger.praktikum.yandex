import Block from "../../core/block";
import * as styles from "./chats.module.css";
import * as validators from "../../utils/validator";
import { navigate } from "../../utils/navigate";

export default class ChatsPage extends Block {
    constructor() {
        super({
            validate: {
                empty: validators.empty,
            },
            onLogin: (event: Event) => {
                event.preventDefault();
                const message =  (<Block>this.refs.message!).value();
                if(!message) {
                    return;
                }
                console.log({
                    message,
                })
            },
            onClick: (e: Event) => {
                e.preventDefault();
                const page = (<HTMLInputElement>e.target).getAttribute("page");
                navigate(page);
            },  
            chats: [
                {
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    chatID: "Qwerty",
                    time: "12:34",
                    unred: "2"
                }
            ]
        })
    }
        
    protected render():string {
        return (`
            <div class="${styles.container}">
                <div class="${styles.list}">
                    <div class="${styles.profile}">
                        <button class="${styles.button}"> Профиль   > </button>
                    </div>
                    <div class="${styles.inputContainer}">
                        <label class="${styles.label}">
                            <input 
                                class="${styles.input}"
                                name="search"
                                placeholder="Поиск"
                            />
                        <label/>
                    </div>
                    {{# ChatsList chats=chats input=input}}{{/ChatsList}}
                </div>
                <div class="${styles.chat}">
                    <div class="${styles.chatHeader}"></div>
                    <div class="${styles.chatBody}">Тут скоро появится история сообщений...</div>
                    <div class="${styles.chatFooter}">
                        <div class="${styles.attach}">
                            {{{ Button label="@" type="link" page="ProfilePage" onClick=onClick}}}
                        </div>
                        <div class="${styles.message}">
                            {{{ Input placeholder="Сообщение" message="message" ref="message" validate=validate.empty}}}
                        </div>
                        
                        <div class="${styles.attach}">
                            {{{ Button label="->" arrow="true"  onClick=onLogin}}}
                        </div>
                    </div>
                </div>
            </div>                
        `)
    }

}
