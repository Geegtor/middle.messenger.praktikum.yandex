import * as styles from "./setPassword.module.css";

const SetPassword = `
    <div class="${styles.container}">
        <div class="${styles.buttonContainer}" page="ChatsPage">
            {{> Button arrow="true" label="<-" page="ChatsPage"}}
        </div>
        <div class="${styles.formContainer}">
        {{#> SetForm}}
        <h2>chatID</h2>
            {{> SetInput label="Старый пароль" name="oldPass" type ="password" on=true}}
            {{> SetInput label="Новый пароль" name="newPass" type ="password" on=true}}
            {{> SetInput label="Повторите пароль" name="confPass" type ="password" on=true}}
            {{> SubmitButton label="Сохранить" page="ErrorHandle"}}
        {{/SetForm}}
        </div>
    </div>
    </div>
`;

export default SetPassword;
