import Block, { Props } from "../../core/block";
import * as styles from "./input-line.module.css"

class InputLine extends Block {
    constructor(props: Props) {
        super({
            ...props,
            events: {
                blur: props.onBlur
            }
        })
    }

    protected render(): string {
        const { placeholder } = this.props;
        return (`
            <input
                class="${styles.element}"
                placeholder="${placeholder || ''}"
                ref="input"
                name="{{name}}"
                {{#if type}}type={{type}}{{/if}}
            />
        `)
    }
}

export default InputLine;
