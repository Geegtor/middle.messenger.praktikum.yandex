import Block from "../../core/base/block";
import * as style from "./error-line.module.css";

export default class ErrorLine extends Block {
    protected render():string {
        return (`
            <div class="${style.validation}">{{error}}</div>
        `)
    }
}
