import Block, { Props } from "../../core/block";
import * as styles from "./button.module.css"

class SubmitButton extends Block {
    constructor(props: Props) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {})
        }
    }

    protected render():string {
        return(`
            <button 
                class="${styles.button} {{#if arrow}}${styles.buttonArrow}{{/if}}" 
                page="{{page}}"
                >
                    {{label}}
            </button>
        `)
    }
}
export default SubmitButton;
