import * as styles from "./profile.module.css";
import Block from "../../core/base/block";
import * as validators from "../../utils/validator";
import { connect } from "../../utils/connect";
import { ProfileProps, User } from "../../types";
import { AuthController } from "../../controllers/auth";
import { getRefs } from "../../utils/getRefs";
import { UserController } from "../../controllers/user";
import { Router } from "../../core/router";

class ProfilePage extends Block {
    constructor(props: ProfileProps) {
        super({
            ...props,
            validate: {
                login: validators.login,
                password: validators.password,
                names: validators.names,
                email: validators.email,
                phone: validators.phone
            },
            back: () => {
                Router.go("/messenger")
            },
            changeHandler: (e: Event) => {
                e.preventDefault();
                const formData = getRefs(this.refs);
                UserController.changeUserProfile(formData as unknown as User)
                    .catch(e => alert(e.message));
            },
            changePassword: () => {
                Router.go("/password")        
            },
            logout: (e: Event) => {
                e.preventDefault();
                AuthController.logout().catch(e => e.message == "Cookie is not valid" ? null : alert(e))
            }
            
        });
    }
    protected render():string {
        return(`
        <div class="${styles.container}">
        <div class="${styles.buttonContainer}" page="ChatsPage">
            {{{ Button arrow="true" label="<-" page="ChatsPage" onClick=back }}}
        </div>
            <div class="${styles.formContainer}">
                    {{#> SetForm}}
                        {{{ AvatarInput avatarId=user.avatar }}}
                        <h2>chatID: ${(<User>this.props.user).id}</h2>
                        {{{ Input label="Почта" email="email" ref="email" value=user.email validate=validate.email}}}
                        {{{ Input label="Логин" login="login" ref="login" value=user.login validate=validate.login}}}
                        {{{ Input label="Имя" first_name="first_name" ref="first_name" value=user.first_name validate=validate.names}}}
                        {{{ Input label="Фамилия" second_name="second_name" ref="second_name" value=user.second_name validate=validate.names}}}
                        {{{ Input label="Телефон" phone="phone" ref="phone" value=user.phone validate=validate.phone}}}
                        {{{ Input label="Имя в чате" display_name="display_name" ref="display_name" value=user.display_name validate=validate.login }}}
                        {{{ Button label="Изменить данные" type="link"  onClick=changeHandler}}}
                        {{{ Button label="Изменить пароль" type="link" onClick=changePassword }}}
                        {{{ Button label="Выйти" type="link"  onClick=logout}}}
                    {{/SetForm}}
                </div>
            </div>
        </div>
        `)
    }
}

const HOC = connect(({ user }) => ({ user }))(ProfilePage)
export { HOC as ProfilePage };
