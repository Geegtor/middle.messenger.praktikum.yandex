import * as styles from "./login.module.css";
import Block from "../../core/block";
import * as validators from "../../utils/validator";
import { navigate } from "../../utils/navigate";


export default class LoginPage extends Block {
    constructor() {
        super({
            validate: {
                login: validators.login,
                password: validators.password
            },
            onLogin: (event: Event) => {
                event.preventDefault();
                const login =  (<Block>this.refs.login!).value(); 
                const password =  (<Block>this.refs.password!).value();

                if(!login) {
                    return;
                }
                console.log({
                    login,
                    password
                })
            },
            onClick: (e: Event) => {
                e.preventDefault();
                const page = (<HTMLInputElement>e.target).getAttribute("page");
                navigate(page);
            }
        });
    }
    protected render(): string {
        return (`
        <div class="${styles.container}">
            {{#> StartForm}}
                <h2>Вход</h2>
                {{{ Input label="Логин" name="login" ref="login" validate=validate.login}}}
                {{{ Input label="Пароль" name="password" ref="password" type="password" validate=validate.password }}}
                {{{ SubmitButton label="Авторизоваться" onClick=onLogin}}}
                {{{ Button label="Нет аккаунта?" type="link" page="RegisterPage" onClick=onClick}}}
            {{/StartForm}}
        </div>
        `);
    }
}
