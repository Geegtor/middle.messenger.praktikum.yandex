import * as styles from "./input.module.css";

const input : string = `
    <div class="${styles.input}">
        <label class="${styles.container}">
            <input
                class="${styles.element}"
                placeholder="{{pholder}}"
                name="{{name}}"
                type="{{type}}"
                value="{{value}}"
            />
            <div class="${styles.label}">{{label}}</div>
        </label>
    </div>
`;

export default input; 
