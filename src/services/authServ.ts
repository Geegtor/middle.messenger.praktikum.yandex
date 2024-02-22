import { HTTP } from "../core/base/http-transport";
import { User } from "../types";


type HttpMethodResp<T> = Promise<{ status: number, response: T }>;


class AuthServices {
    async getUserInfo() {
        return await HTTP.get(HTTP.buildURL("auth/user"), {
            headers: {"Content-Type": "applicatio/json"},
        }) as HttpMethodResp<User>;
    }

    async signIn(login: string, password: string) {
        return await HTTP.post(HTTP.buildURL("auth/signin") ,{
            data: {
                login,
                password,   
            },
            headers: { "Content-Type": "application/json" },
        });
    }

    async signUp(user: User) {
        return await HTTP.post(HTTP.buildURL("auth/signup"), {
            data: {...user},
            headers: { "Content-Type": "application/json" },
        })
    }

    async logout() {
        return await HTTP.post(HTTP.buildURL("auth/logout"), {
            headers: { "Content-Type": "application/json" },
        });
    }
}

const AUTH = new AuthServices();
export { AUTH as AuthService };
