import { UserController } from "../../controllers/user";
import Block from "../../core/base/block";
import constants from "../../core/constants";
import { Indexed } from "../../types";
import * as styles from "./input-avatar.module.css"

interface AvatarProps extends Indexed {
    avatarId: string;
}

export class AvatarInput extends Block {
    constructor(props: AvatarProps) {
        super({
            ...props,
            avatarURI: constants.HOST + "resources" + props.avatarId
        })

        this.props.events = {
            click: () => {
                const avatarInput = document.getElementById("avatar");
                if (avatarInput) {
                    avatarInput.click();
                    avatarInput.onchange = (e: Event) => {
                        const filesList = (e.target as HTMLInputElement)?.files ?? [];
                        UserController.setAvatar(filesList[0])
                            .catch(e => alert(e)) 
                    };
                }
            }
        };
    }

    protected render() {
        return (`
            <div class="${styles.avatar}" name="avatar" {{#if avatarURI}}
                style="background-image: url({{avatarURI}}); background-size: cover;" {{/if}}>
                <input type="file" id="avatar" accept=".jpg, .png, .jpeg" style="display: none">
            </div>
        `)
    }
}

export default AvatarInput;
