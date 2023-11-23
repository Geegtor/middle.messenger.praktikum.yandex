import * as styles from "./profile.module.css";
import Block from "../../core/block";
import * as validators from "../../utils/validator";
import { navigate } from "../../utils/navigate";

class ProfilePage extends Block {
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
        <div class="${styles.buttonContainer}" page="ChatsPage">
            {{{ Button arrow="true" label="<-" page="ChatsPage" onClick=onClick }}}
        </div>
            <div class="${styles.formContainer}">
                    {{#> SetForm}}
                        <h2>chatID</h2>
                        {{{ Input label="Почта" name="email" ref="email" validate=validate.email}}}
                        {{{ Input label="Логин" name="login" ref="login" validate=validate.login}}}
                        {{{ Input label="Имя" name="first_name" ref="first_name" validate=validate.names}}}
                        {{{ Input label="Фамилия" name="second_name" ref="second_name" validate=validate.names}}}
                        {{{ Input label="Телефон" name="phone" ref="phone" validate=validate.phone}}}
                        {{{ Input label="Пароль" type="password" name="password" ref="password" validate=validate.password }}}
                        {{{ Input label="Пароль (ещё раз)" type="password"  name="password_confirm" validate=validate.password}}}
                        {{{ Button label="Изменить данные" type="link" page="ErrorHandle" onClick=onClick}}}
                        {{{ Button label="Изменить пароль" type="link" page="SetPassword" onClick=onClick}}}
                        {{{ Button label="Выйти" type="link" page="LoginPage"}}}
                    {{/SetForm}}
                </div>
            </div>
        </div>
        `)
    }
}
export default ProfilePage;
