export default class AppStore {
  error: string | undefined = undefined;
  user: User | undefined = undefined;
  isMenuOpened: boolean = false;
  chats: Chat[] = [];
  currentChat: Chat | undefined = undefined;
  token: string = "";
  messages: Message[] = [];
}

export interface Indexed {
  [key: string]: unknown;
}

export interface User {
  first_name: string;
  second_name: string;
  avatar?: string;
  email: string;
  login: string;
  phone: string;
  id: number;
}

export interface Passwords {
  oldPassword: string;
  newPassword: string;
}

export interface ProfileProps extends Indexed {
  user: User;
}

export interface AddChatProps extends Indexed {
  currentChat: Chat
}

export interface ChatsProps extends Indexed {
  chats: Chat[],
  messages: [],
  user: User
}

export interface Message extends Indexed {
  id?: number;
  user_id?: number;
  chat_id?: number;
  type?: string;
  time?: string;
  content?: string;
  is_read?: boolean;
  file?: string;
}

export interface MessageCard extends Indexed {
  userName: string;
  text: string;
  time: string;
  isMine: boolean;
}

export type Chat = {
  id: number,
  title: string,
  avatar: Nullable<string>,
  created_by: number,
  unreadCount: number,
  last_message: Message, 
}

export type Resp = {
  readonly headers?: Headers;
  readonly ok?: boolean;
  readonly redirected?: boolean;
  readonly status?: number;
  readonly statusText?: string;
  readonly type?: ResponseType;
  readonly url?: string;
  readonly response?: Response;
  readonly reason: string;
}
