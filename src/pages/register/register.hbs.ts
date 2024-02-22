import Block from "../../core/base/block";
import * as styles from "./register.module.css";
import * as validators from "../../utils/validator";
import { Router } from "../../core/router";
import { getRefs } from "../../utils/getRefs";
import { User } from "../../types";
import { Input } from "../../components";
import { AuthController } from "../../controllers/auth";

class RegisterPage extends Block {
    constructor() {
        super({
            validate: {
                login: validators.login,
                password: validators.password,
                names: validators.names,
                email: validators.email,
                phone: validators.phone,
            },
            onSignUp: (event: Event) => {
                event.preventDefault();
                const values = getRefs(this.refs as Record<keyof User, Input>) as unknown as User;
                if (Object.values(values).some(x => !x)) {
                    return;
                }
                AuthController.signUp(values)
                    .catch(e => alert(e.message))
            },
            onClick: (e: Event) => {
                e.preventDefault();
                Router.go("/")
            }
        });
    }
    protected render():string {
        return(`
        <div class="${styles.container}">
        {{#> StartForm}}
            <h2>Регистрация</h2>
            {{{ Input label="Почта" email="email" ref="email" validate=validate.email}}}
            {{{ Input label="Логин" login="login" ref="login" validate=validate.login}}}
            {{{ Input label="Имя" first_name="first_name" ref="first_name" validate=validate.names}}}
            {{{ Input label="Фамилия" second_name="second_name" ref="second_name" validate=validate.names}}}
            {{{ Input label="Телефон" phone="phone" ref="phone" validate=validate.phone}}}
            {{{ Input label="Пароль"  password="password" ref="password" validate=validate.password }}}
            {{{ Input label="Пароль (ещё раз)" password="password"  name="password_confirm" validate=validate.password}}}            
            {{{ SubmitButton label="Зарегистрироваться" onClick=onSignUp}}}
            {{{ Button label="Войти" type="link" page="ChatsPage" onClick = onClick }}}
            {{/StartForm}}
        </div>
        `)
    }
}

export default RegisterPage;
