import Block from "../../core/base/block";
import * as styles from "./setPassword.module.css";
import * as validators from "../../utils/validator";
import { getRefs } from "../../utils/getRefs";
import { UserController } from "../../controllers/user";
import { connect } from "../../utils/connect";
import { Router } from "../../core/router";

class SetPassword extends Block {
    constructor() {
        super({
            validate: {
                password: validators.password,
            },
            validatePassMatch: (pass: string) => {
                const newPass = (this.refs.passwordNew).value();
                return pass === newPass ? "" : "Entered passwords mismatch"
            },
            setNewPassword: () => {
                const values = getRefs(this.refs);
                const passwords = {
                    oldPassword: values.password, 
                    newPassword: values.passwordNew
                }
                if (Object.values(values).some(x => !x)) {
                    return null;
                }
                UserController.changeUserPasword(passwords)
                    .catch(e => alert(e.message))
            },
            back: () => {
                Router.go("/settings")
            }
        })
    }
    protected render(): string {
        return (`
            <div class="${styles.container}">
                <div class="${styles.buttonContainer}" page="ErrorHandle">
                    {{{ Button arrow="true" label="<-" page="ErrorHandle" onClick=back}}}
                </div>
                <div class="${styles.formContainer}">
                {{#> SetForm}}
                    {{{ Input label="Старый пароль" password="password" ref="password" type="password" validate=validate.password}}}
                    {{{ Input label="Новый пароль" password="password_new" ref="passwordNew" type="password" validate=validate.password}}}
                    {{{ Input label="Повторите пароль" password="password_new_confirm" ref="passwordConf" type="password" validate=validatePassMatch}}}
                    {{{ SubmitButton label="Сохранить" onClick=setNewPassword }}}
                {{/SetForm}}
                </div>
            </div>
        </div>
        `)
    }
}

const HOC = connect(({user}) => ({user}))(SetPassword);
export { HOC as SetPassword };
