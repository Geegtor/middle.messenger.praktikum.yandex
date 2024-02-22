import Block from "../../core/base/block";
import { AddChat } from "./addChat";
import { AddUser } from "./addUser";
import { RemoveUser } from "./removeUser";

export const Modals: Record<string, typeof Block> = {
    "add-chat": AddChat,
    "add-user": AddUser,
    "remove-user": RemoveUser
};
