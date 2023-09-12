import * as styles from "./register.module.css";

const RegisterPage : string = `
    <div class="${styles.container}">
        {{#> StartForm}}
            <h2>Регистрация</h2>
            {{> Input label="Почта" name="email"}}
            {{> Input label="Логин" name="login"}}
            {{> Input label="Имя" name="first_name"}}
            {{> Input label="Фамилия" name="second_name"}}
            {{> Input label="Телефон" name="phone"}}
            {{> Input label="Пароль" type="password" name="password"}}
            {{> Input label="Пароль (ещё раз)" type="password" name="password_confirm"}}            
            {{> SubmitButton label="Зарегистрироваться"}}
            {{> Button label="Войти" type="link" page="ChatsPage"}}
        {{/StartForm}}
    </div>
`;

export default RegisterPage;
