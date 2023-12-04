import Block from "../../core/block";
import * as styles from "./setPassword.module.css";
import * as validators from "../../utils/validator";
import { navigate } from "../../utils/navigate";

class SetPassword extends Block {
    constructor() {
        super({
            validate: {
                password: validators.password,
            },
            onLogin: (event:Event) => {
                event.preventDefault();
                const password = (<Block>this.refs.password!).value();
                const passwordNew = (<Block>this.refs.passwordNew!).value();
                const passwordConf = (<Block>this.refs.passwordConf!).value();
                if (!password) {
                    return;
                }
                console.log({
                    password,
                    passwordNew,
                    passwordConf
                })
            },
            onClick: (e: Event) => {
                e.preventDefault();
                const page = (<HTMLInputElement>e.target).getAttribute("page");
                navigate(page);
            }
        })
    }
    protected render(): string {
        return (`
            <div class="${styles.container}">
                <div class="${styles.buttonContainer}" page="ErrorHandle">
                    {{{ Button arrow="true" label="<-" page="ErrorHandle" onClick=onClick}}}
                </div>
                <div class="${styles.formContainer}">
                {{#> SetForm}}
                <h2>chatID</h2>
                    {{{ Input label="Старый пароль" password="password" ref="password" type="password" validate=validate.password}}}
                    {{{ Input label="Новый пароль" password="password_new" ref="passwordNew" type="password" validate=validate.password}}}
                    {{{ Input label="Повторите пароль" password="password_new_confirm" ref="passwordConf" type="password" validate=validate.password}}}
                    {{{ SubmitButton label="Сохранить" onClick=onLogin page="ErrorHandle"}}}
                {{/SetForm}}
                </div>
            </div>
        </div>
        `)
    }
}
export default SetPassword;
