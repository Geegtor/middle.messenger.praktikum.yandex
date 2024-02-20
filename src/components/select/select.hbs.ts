import Block from "../../core/base/block";
import { Indexed } from "../../types";

import * as styles from "./select.module.css" 

interface SelectProps extends Indexed {
    options: { title: string; value: number }[]
}

export class Select extends Block {
    constructor(props: SelectProps) {
        super({
            ...props
        })
    }

    private get _selectValue() {
        return (<HTMLInputElement>(this.refs.select as Select).getContent())?.value;
    }

    value() {
        return this._selectValue;
    }

    render() {
        return (`
        <div class="${styles.form}" tabindex="0">
            <div class="${styles.title}">{{title}}</div>
            <br/>
            {{{ Options ref="select" options=options }}}
            <br/>
        </div>
        `)
    }
}
