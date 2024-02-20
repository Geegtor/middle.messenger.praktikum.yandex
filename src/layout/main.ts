import Handlebars from "handlebars";
import { registerComponent } from "../utils/registerComponents";

import * as Components from "./../components";
import { LoginPage, ProfilePage, RegisterPage, SetPassword, ChatsPage } from "../pages"; 
import { Router } from "../core/router.ts";
import AppStore from "../types.ts";

registerComponent("ErrorLine", Components.ErrorLine);
registerComponent('Button', Components.Button);
registerComponent('Link', Components.Link);
registerComponent('Input', Components.Input);
registerComponent('InputLine', Components.InputLine);
registerComponent('SubmitButton', Components.SubmitButton);
registerComponent('ChatCard', Components.ChatCard);
registerComponent('ChatsList', Components.ChatsList);
registerComponent('AvatarInput', Components.AvatarInput);
registerComponent("ChatMessenger", Components.ChatMessenger);
registerComponent("MessageCard", Components.MessageCard);
registerComponent("MenuPopup", Components.MenuPopup);
registerComponent("Overlay", Components.Overlay);
registerComponent("Select", Components.Select);
registerComponent("Options", Components.Options);

Handlebars.registerPartial("StartForm", Components.StartForm);
Handlebars.registerPartial("SetForm", Components.SetForm);

declare global {
  interface Window {
    store: AppStore | unknown;
  }
  type Nullable<T> = T | null;
}

enum Routes {
  Signin = "/",
  Signup = "/sign-up",
  Profile = "/settings",
  Password = "/password",
  Messanger = "/messanger" 
}

Router.start();

async function start (): Promise<void> {
  Router
    .use(Routes.Signin, LoginPage)
    .use(Routes.Signup, RegisterPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Password, SetPassword)
    .use(Routes.Messanger, ChatsPage);

  switch (window.location.pathname) {
    case Routes.Signin:
      Router.go("/");
      break;
    case Routes.Signup:
      Router.go("/sign-up");
      break;
    case Routes.Profile:
      Router.go("/settings");
      break;
    case Routes.Password:
      Router.go("/password");
      break;
    case Routes.Messanger:
      Router.go("/messanger");
      break
  }
}

document.addEventListener("DOMContentLoaded", start);
