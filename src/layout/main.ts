import Handlebars from "handlebars";import { registerComponent } from "../utils/registerComponents";

import * as Components from "./../components";
import { ErrorHandle } from "../pages"; 
import { render } from "../utils/navigate";


Handlebars.registerPartial("StartForm", Components.StartForm);
Handlebars.registerPartial("SetForm", Components.SetForm);

registerComponent("ErrorLine", Components.ErrorLine);
registerComponent('Button', Components.Button);
registerComponent('Input', Components.Input);
registerComponent('InputLine', Components.InputLine);
registerComponent('SubmitButton', Components.SubmitButton);
registerComponent('ChatCard', Components.ChatCard);
registerComponent('ChatsList', Components.ChatsList);
registerComponent('SetInput', Components.SetInput);

document.addEventListener("DOMContentLoaded", () => render(new ErrorHandle()));
