import * as styles from "./startForm.module.css";

const StartForm : string = `
    <form class="${styles.startForm }">
        {{> @partial-block }}
    </form>
`;

export default StartForm;
