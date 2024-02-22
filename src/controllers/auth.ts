import { AuthService } from "../services/authServ";
import { Router } from "../core/router";
import { Store } from "../core/store";
import { User } from "../types";

class AuthController {
    async getUserInfo(){
        const r = await AuthService.getUserInfo()
            .then( (data) => {
                Store.set({ user: data.response})
            });
        return r;
    }

    async signIn(login: string, password: string) {
        return await AuthService.signIn(login, password)
            .then(() => {                
                this.getUserInfo()
                Router.go("/messenger")
            });
    }

    async signUp(user: User) {
        return await AuthService.signUp(user)
            .then(() => {
                this.getUserInfo();
                Router.go("/messenger");
            });
    }

    async logout() {
        return AuthService.logout()
            .then(() => Router.go("/"))
            .catch(() => Router.go("/"))
    }
}

const AUTHC = new AuthController();
export { AUTHC as AuthController };
