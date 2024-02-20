import { Router } from "../core/router";
import { Store } from "../core/store";
import { UserService } from "../services/userServ";
import { Passwords, User } from "../types";

class UserController {
    async setAvatar(file: File) {
        return await UserService.setAvatar(file)
            .then( (data) => {
                Store.set({ 
                    user: data.response
                })
            });
    }

    async changeUserProfile(user: User) {
        return await UserService.changeProfile(user)
            .then( (data) => {
                Store.set({ user: data.response });
                Router.go("/messanger");
            });
    }

    async changeUserPasword(passwords: Passwords){
        return await UserService.changePassword(passwords)
            .then(() => Router.go("/settings"))
    }

    async searchUserByLogin(login: string) {
        return await UserService.searchLogin(login)
            .then(data => {
                return data.response
            })
    }
}

const USERC = new UserController();
export { USERC as UserController};
