import { Modals } from "../components/modals";

class ModalController {
    private _params: Record<string, unknown> = {};

    private _show (modalName: string, params: Record<string, unknown>) {
        this._params[modalName] = params;

        document.querySelector("#modal")?.classList.add("visible");

        const modalBlock = (new (Modals[modalName])()).getContent(true);
        document.querySelector("#modal .content")?.append(modalBlock  as HTMLElement);

    }

    private _close (modalName: string) {
        modalName in this._params ? delete this._params[modalName] : null;
        document.querySelector("#modal .content")!.innerHTML = "";
        document.querySelector("#modal")?.classList.remove("visible");
    }

    public show (modalName: string, params: Record<string, unknown>) {
        this._show(modalName, params);
    }

    public close (modalName: string) {
        this._close(modalName);
    }

    public getParams (modalName: string) {
        return this._params[modalName];
    }
}

const MODAL = new ModalController();
export { MODAL as ModalController };
