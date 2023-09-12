import * as styles from "./setInput.module.css";

const SetInput : string = `
    <div class="${styles.container}">
        <label class="${styles.container}">
            {{label}}
        </label>
        <input
            class="${styles.input}"
            name="{{name}}"
            label="{{label}}"
            value="{{value}}"
            type="{{type}}"
            {{#unless on}}disabled{{/unless}}
        />
    </div>
`;

export default SetInput;
