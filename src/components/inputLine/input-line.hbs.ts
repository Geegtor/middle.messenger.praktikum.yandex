import Block from "../../core/block";
import * as styles from "./input-line.module.css"

interface IProps {
    classes: string,
    placeholder: string,
    onBlur: CallableFunction
}

export default class InputLine extends Block {
    constructor(props: IProps) {
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
                type="{{type}}"
            />
        `)
    }
}
