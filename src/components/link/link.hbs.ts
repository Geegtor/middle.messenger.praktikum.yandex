import Block, { Props } from "../../core/base/block";
import * as styles from "./link.module.css"

class Link extends Block {
    constructor(props: Props) {
        super(props);
        this.props.events = {
            click: this.props.onClick || (() => {})
        }
    }

    protected render():string {
        return(`
        <div class="${styles.profile}">
            <button class="${styles.button}"> {{text}}   > </button>
        </div>
        `)
    }
}
export default Link;
