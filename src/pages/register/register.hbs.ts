import Block from "../../core/block";
import * as styles from "./register.module.css";
import * as validators from "../../utils/validator";
import { navigate } from "../../utils/navigate";

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
            onLogin: (event: Event) => {
                event.preventDefault();
                const email =  (<Block>this.refs.email!).value();
                const login =  (<Block>this.refs.login!).value();
                const first_name =  (<Block>this.refs.first_name!).value();
                const second_name =  (<Block>this.refs.second_name!).value();
                const phone =  (<Block>this.refs.login!).value();
                const password =  (<Block>this.refs.password!).value();

                if(!login) {
                    return;
                }
                console.log({
                    email,
                    login,
                    first_name,
                    second_name,
                    phone,
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
            {{{ SubmitButton label="Зарегистрироваться" onClick=onLogin}}}
            {{{ Button label="Войти" type="link" page="ChatsPage" onClick = onClick }}}
            {{/StartForm}}
        </div>
        `)
    }
}

export default RegisterPage;
