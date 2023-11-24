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
                {{#if login}}
                {{{ InputLine ref="input" name="login" onBlur=onBlur onSubmit=onSubmit }}}
            {{/if}} 
            {{#if email}}
                {{{ InputLine ref="input" name="email" onBlur=onBlur onSubmit=onSubmit }}}
            {{/if}} 
            {{#if password}}
                {{{ InputLine ref="input" name="password" type="password" onBlur=onBlur onSubmit=onSubmit }}}
            {{/if}} 
            {{#if phone}}
                {{{ InputLine ref="input" name="phone" onBlur=onBlur onSubmit=onSubmit }}}
            {{/if}} 
            {{#if first_name}}
                {{{ InputLine ref="input" name="first_name" onBlur=onBlur onSubmit=onSubmit }}}
            {{/if}} 
            {{#if second_name}}
                {{{ InputLine ref="input" name="second_name" onBlur=onBlur onSubmit=onSubmit }}}
            {{/if}} 
            {{#if display_name}}
                {{{ InputLine ref="input" name="display_name" onBlur=onBlur onSubmit=onSubmit }}}
            {{/if}} 
            {{#if message}}
                {{{ InputLine ref="input" name="message" onBlur=onBlur onSubmit=onSubmit }}}
            {{/if}} 
            {{#if avatar}}
                {{{ InputLine ref="input" name="avatar" onBlur=onBlur onSubmit=onSubmit }}}
            {{/if}} 
                    <div class="${styles.label}">{{label}}</div>
                </label>
                {{{ ErrorLine error=${this.props.errorLine} ref="errorLine"}}}
            </div>
        `)
    }
}

export default Input;
