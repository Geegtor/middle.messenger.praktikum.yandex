import Block, { Props } from "../../core/block";
import * as styles from "./input.module.css";

class Input extends Block {
    constructor(props: Props) {
        super({
            ...props,
            onBlur: () => this.validate(),
            onSubmit: () => this.validate(),
        })
    }
    public value() {
        if (!this.validate) {
            return '';
        }
        return (<HTMLInputElement>this.refs.input.element!).value
    }
    private validate() {
        const value = (<HTMLInputElement>this.refs.input.element!).value;
        const error = (<CallableFunction>this.props.validate)?.(value);
        if (error) {
            this.refs.errorLine.setProps({ error });
            return false;
        }
        this.refs.errorLine.setProps({ error: undefined });
        return true;
    }
    render() {
        return (`
            <div class="${styles.input}">
                <label class="${styles.container}">
                    {{{ InputLine 
                            ref="input"
                            onBlur=onBlur
                            onSubmit=onSubmit
                    }}}
                    <div class="${styles.label}">{{label}}</div>
                </label>
                {{{ ErrorLine error=${this.props.errorLine} ref="errorLine"}}}
            </div>
        `)
    }
}

export default Input;
