import Block from "../../core/base/block";
import * as styles from "./messageCard.module.css";

export class MessageCard extends Block {
    protected render() {
        return (`
            <div {{#if isMine}}class="${styles.messageCard} ${styles.sent}"
            {{else}}class="${styles.messageCard} ${styles.received}"
            {{/if}}>
                <div class="${styles.userName}">
                    {{userName}}
                </div>
                <div class="message-card__text">
                    {{text}}
                </div>
                <div class="${styles.timestamp}">
                    {{time}}
                </div>
            </div>
        `)
    }
}
