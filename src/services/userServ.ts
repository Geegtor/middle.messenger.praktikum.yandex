import { HTTP } from "../core/base/http-transport";
import { Passwords, User } from "../types";

type HttpMethodResp<T> = Promise<{ status: number, response: T }>;

class UserService {
    async setAvatar(file: File) {
        const formData = new FormData();
        formData.append("avatar", file);
        return await HTTP.put(HTTP.buildURL("user/profile/avatar"), {
            data: formData
        }) as HttpMethodResp<User>;
    }

    async changeProfile(user: User) {
        return await HTTP.put(HTTP.buildURL("user/profile"), {
            headers: { "Content-Type": "application/json" },
            data: user,
        })  as HttpMethodResp<User>;
    }

    async changePassword(passwords: Passwords) {
        return await HTTP.put(HTTP.buildURL("user/password"), {
            headers: { "Content-Type": "application/json" },
            data: { 
                ...passwords 
            }
        })  as HttpMethodResp<User>;
    }

    async searchLogin(login: string) {
        return await HTTP.post(HTTP.buildURL("user/search"), {
            headers: { "Content-Type": "application/json" },
            data: {
                login,
            }
        })  as HttpMethodResp<User[]>;
    }
}

const USER = new UserService();
export { USER as UserService };
