import * as styles from "./chats.module.css";

export const ChatsPage = `
    <div class="${styles.container}">
        <div class="${styles.list}">
            <div class="${styles.profile}">
                <button class="${styles.button}" page="ProfilePage"> Профиль   > </button>
            </div>
            <div class="${styles.inputContainer}">
                <label class="${styles.label}">
                    <input 
                        class="${styles.input}"
                        name="search"
                        placeholder="Поиск"
                    />
                <label/>
            </div>
            {{> ChatsList }}
        </div>
        <div class="${styles.chat}">
            <div>Выберите чат, чтобы отправить сообщение</div>
        </div>
    </div>
`;
