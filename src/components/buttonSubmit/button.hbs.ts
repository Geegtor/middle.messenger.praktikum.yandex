import * as styles from "./button.module.css"

const submitButton : string = `
    <div class="${styles.caption}"></div>
    <input 
        class="${styles.button}" 
        page="{{page}}"
        type="submit"
        value="{{label}}"
    />
`;

export default submitButton;
