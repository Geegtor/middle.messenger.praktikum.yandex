import * as styles from "./login.module.css";

const LoginPage : string = `
    <div class="${styles.container}">
        {{#> StartForm}}
            <h2>Вход</h2>
            {{> Input label="Логин" name="login"}}
            {{> Input label="Пароль" name="password" type="password"}}
            {{> SubmitButton label="Авторизоваться"}}
            {{> Button label="Нет аккаунта?" type="link" page="RegisterPage"}}
        {{/StartForm}}
    </div>
`;

export default LoginPage;
