import * as Components from "./../components";
import * as Pages from "./../pages";
import Handlebars from "handlebars";


Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

const pages : { [key: string]: string[] }  = {
  "LoginPage": [ Pages.LoginPage ],
  "RegisterPage": [ Pages.RegisterPage ],
  "ChatsPage": [Pages.ChatsPage],
  "ProfilePage": [Pages.ProfilePage],
  "PasswordPage": [Pages.SetPassword],
  "ErrorHandle" : [Pages.ErrorHandle]
};

function navigate(page: string): void {
  const [ source, context ] = pages[page];
  const container = document.getElementById("app");
  container ? container.innerHTML = Handlebars.compile(source)(context) : null;
}

document.addEventListener("DOMContentLoaded", () => navigate("LoginPage"));

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T; 
}

document.addEventListener("click", (e: HTMLElementEvent<any>): void => {
  const page = e.target.getAttribute("page");
  e.preventDefault();
  e.stopImmediatePropagation();
  if (page) {
    navigate(page);
  }
});
