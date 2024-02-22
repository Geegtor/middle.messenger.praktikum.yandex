import Block from "../../core/base/block";
import { Indexed } from "../../types";

import * as styles from "./menu.module.css"

interface OverlayProps extends Indexed {
    onClick: () => void;
}

export class Overlay extends Block{
    constructor(props: OverlayProps) {
        super(props);

        this.props.events = {
            click: this.props.onClick
        };
    }

    protected render() {
        return (`
            <div class="${styles.overlay}"></div>
        `)
    }
}
