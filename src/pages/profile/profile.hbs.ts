import * as styles from "./profile.module.css";

const ProfilePage = `
    <div class="${styles.container}">
        <div class="${styles.buttonContainer}" page="ChatsPage">
            {{> Button arrow="true" label="<-" page="ChatsPage"}}
        </div>
        <div class="${styles.formContainer}">
        {{#> SetForm}}
        <h2>chatID</h2>
            {{> SetInput label="Почта" name="email" value="middle@ya.ru"}}
            {{> SetInput label="Логин" name="login" value="middle@ya.ru"}}
            {{> SetInput label="Имя" name="first_name" value="middle@ya.ru"}}
            {{> SetInput label="Фамилия" name="second_name" value="middle@ya.ru"}}
            {{> SetInput label="Никнейм" name="nickname" value="middle@ya.ru"}}
            {{> SetInput label="Телефон" name="phone" value="middle@ya.ru"}}
            {{> Button label="Изменить данные" type="link"}}
            {{> Button label="Изменить пароль" type="link" page="PasswordPage"}}
            {{> Button label="Выйти" type="link" page="LoginPage"}}
        {{/SetForm}}
        </div>
    </div>
    </div>
`;

export default ProfilePage;
