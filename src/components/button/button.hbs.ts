import * as styles from "./button.module.css"

const button : string = `
    <button 
        class="${styles.button} {{#if arrow}}${styles.buttonArrow}{{/if}}" 
        page="{{page}}"
        >
            {{label}}
    </button>
`;

export default button;
