import * as styles from "./login.module.css";
import Block from "../../core/base/block";
import * as validators from "../../utils/validator";
import { Router } from "../../core/router";
import { connect } from "../../utils/connect";
import { getRefs } from "../../utils/getRefs";
import { Input } from "../../components";
import { AuthController } from "../../controllers/auth";

type LoginInputs = {
    login: string;
    password: string;
  }

class LoginPage extends Block {
    constructor() {
        super({
            validate: {
                login: validators.login,
                password: validators.password
            },
            onLogin: (event: Event) => {
                event.preventDefault();
                const values = getRefs(this.refs as Record<keyof LoginInputs, Input>);
                if (Object.values(values).some(x => !x)) {
                    return null;
                }
                AuthController.signIn(values.login, values.password)
                    .then(() => {
                        AuthController.getUserInfo();
                    })
                    .catch(e => {
                        e.message == "User already in system"  ?
                        Router.go("/messenger") :
                        alert(e.message)
                    })
            },
            getAccount: (e: Event) => {
                e.preventDefault();
                Router.go("/sign-up")
            }
        });
    }
    protected render(): string {
        return (`
        <div class="${styles.container}" style="">
            {{#> StartForm}}
                <h2>Вход</h2>
                {{{ Input label="Логин" login="login" ref="login" validate=validate.login}}}
                {{{ Input label="Пароль" password="password" ref="password" type="password" validate=validate.password }}}
                {{{ SubmitButton label="Авторизоваться" onClick=onLogin}}}
                {{{ Button label="Нет аккаунта?" type="link" page="RegisterPage" onClick=getAccount}}}
            {{/StartForm}}
        </div>
        `);
    }
}

const HOC = connect(({chats, user}) => ({chats, user}))(LoginPage);
export { HOC as LoginPage };
