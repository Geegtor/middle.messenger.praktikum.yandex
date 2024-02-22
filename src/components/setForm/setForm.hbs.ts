import * as styles from "./setForm.module.css";

const SetForm : string = `
    <form class = "${styles.settingsForm}">
            {{> @partial-block}}
    </form>
`;

export default SetForm;
