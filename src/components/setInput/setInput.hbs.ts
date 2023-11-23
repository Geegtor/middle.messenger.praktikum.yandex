import Block, { Props } from "../../core/block";
import * as styles from "./setInput.module.css";

class SetInput extends Block {
    constructor(props: Props) {
        super({
            ...props,
            onBlur: () => this.validate(),
            onSubmit: () => this.validate(),
        })
    }
    public value() {
        if (!this.validate) {
            return null;
        }
        return <HTMLInputElement>(this.refs.input.element).value
    }
    private validate() {
        const value = <HTMLInputElement>(this.refs.input.element).value;
        const error = <CallableFunction>this.props.validate(value);
        if (error) {
            this.refs.errorLine.setProps({ error });
            return false;
        }
        this.refs.errorLine.setProps({ error: undefined });
        return true;
    }
    render() {
        return (`
            <div class="${styles.container}">
                <label class="${styles.container}">
                    {{label}}
                </label>
                {{{ InputLine
                        ref = "input"
                        onBlur = onBlur
                        onSubmit=onSubmit
                }}}
            </div>
        `)
    }
}
export default SetInput;
