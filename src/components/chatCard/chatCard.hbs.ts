import * as styles from "./chatCard.module.css";

const ChatCard = `
    <div class="${styles.container} {{#if selected}}${styles.selected} {{/if}}">
        <img 
            class="${styles.pic}" 
            src="{{pic}}"
            alt=""
        />

        <div class="${styles.message}">
            {{chatID}}<br>
            {{message}}
        </div>

        <div class="${styles.caption}"></div>
        
        <div class="${styles.info}">
            <b>{{time}}</b>
            <div class="${styles.red} {{#if unred}}${styles.unred}{{/if}}">
                {{unred}}
            </div>
        </div>
    </div>
`;

export default ChatCard;
