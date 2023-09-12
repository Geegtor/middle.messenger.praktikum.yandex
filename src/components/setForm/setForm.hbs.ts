import * as styles from "./setForm.module.css";

const SetForm : string = `
    <form class = "${styles.settingsForm}">
        <div 
            class="${styles.avatar}"
        >
        </div>
            {{> @partial-block}}
    </form>
`;

export default SetForm;
