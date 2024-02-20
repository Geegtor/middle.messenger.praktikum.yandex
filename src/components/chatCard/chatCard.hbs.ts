import Block from "../../core/base/block";
import { Chat, Indexed } from "../../types";
import { formatDateTime } from "../../utils/handleDate";
import * as styles from "./chatCard.module.css";

interface ChatCard extends Indexed {
    chat: Chat,
    onSelect: (chat: Chat) => void;
}

class ChatCard extends Block {
    constructor(props: ChatCard) {
        super({
            ...props,
            lastReplay: formatDateTime(props.chat?.last_message?.time)
        })

        this.props.events = {
            click: () => (<ChatCard>this.props).onSelect(props.chat),
        }
    }
    protected render():string {
        return (`
            <div class="${styles.container} {{#if selected}}${styles.selected} {{/if}}">
                <img 
                    class="${styles.pic}" 
                    alt="photo"
                    {{#if chat.avatar}}
                        src="https://ya-praktikum.tech/api/v2/resources{{chat.avatar}}"
                        width="50px" 
                        height="50px"
                    {{/if}}
                />
        
                <div class="${styles.message}">
                    <b>{{chat.title}}</b><br>
                    {{chat.last_message.content}}
                </div>
        
                <div class="${styles.caption}"></div>
                
                <div class="${styles.info}">
                    <b>{{lastReplay}}</b>
                    <div class="${styles.red} {{#if chat.unread_count}}${styles.unred}{{/if}}">
                    {{#if chat.unread_count}}{{chat.unread_count}}{{/if}}
                    </div>
                </div>
            </div>

        `)
    }
}
export default ChatCard;
