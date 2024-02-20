import Block from "../../core/base/block";
import { Router } from "../../core/router";
import * as styles from "./errorPage.module.css";

class ErrorHandle extends Block {
    constructor() {
        super({
            onClick: () => {
                Router.go("/settings")
            }
        });
        this.props.reqError = "404";
    }
    protected render():string {
        return (`
            <div class="${styles.container}">
                <h1>${this.props.reqError }</h1>
                <h3>Страница не найдена</h3>
                {{{ Button 
                    label="Назад к чатам" 
                    type="link" 
                    page="LoginPage"
                    onClick=onClick
                }}}
            </div>
        `)
    }
}

export default ErrorHandle;
