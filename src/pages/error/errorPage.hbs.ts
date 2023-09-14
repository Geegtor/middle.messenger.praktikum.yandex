import * as styles from "./errorPage.module.css";

const ErrorHandle = `
    <div class="${styles.container}">
        <h1>404</h1>
        <h3>Страница не найдена</h3>
        {{> Button 
            label="Назад к чатам" 
            type="link" 
            page="LoginPage"
        }}
    </div>
`;

export default ErrorHandle;
