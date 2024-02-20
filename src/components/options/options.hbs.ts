import Block from "../../core/base/block";
import { Indexed } from "../../types";

import * as styles from "./options.module.css";


interface OptionsProps extends Indexed {
    options: {title: string; value: number}[];
}

export class Options extends Block {
    constructor(props: OptionsProps) {
        super({
            ...props,
        });
    }

    protected render() {
        return (`
        <select 
            class="${styles.option}" 
            ref="select" 
        >
            {{#each options}}
                <option value={{value}}>{{title}}</option>
            {{/each}}
        </select>
        `);
    }
}
