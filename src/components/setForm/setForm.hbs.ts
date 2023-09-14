import * as styles from "./setForm.module.css";

const SetForm : string = `
    <form class = "${styles.settingsForm}">
        <div 
            name ="avatar"
            class="${styles.avatar}"
        >
        </div>
            {{> @partial-block}}
    </form>
`;

export default SetForm;
