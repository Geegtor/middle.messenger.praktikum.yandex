import Block from "../core/block";
import * as Pages from "./../pages";

export function render(block: Block, query:string = "app") : Element | null {
    const root = document.getElementById(query);
    const blockContent = block.getContent();
    if (root && blockContent) {
      root.innerHTML = "";
      root.appendChild(blockContent);
      block.dispatchComponentDidMount();
    }
    return root;
  }

export function navigate(page: string) {
    const pages: Record<string, Block> = {
        "LoginPage": new Pages.LoginPage(),
        "RegisterPage": new Pages.RegisterPage(),
        "ChatsPage": new Pages.ChatsPage(),
        "ProfilePage": new Pages.ProfilePage(),
        "SetPassword": new Pages.SetPassword(),
        "ErrorHandle": new Pages.ErrorHandle()
    }
    render(pages[page]);
}
