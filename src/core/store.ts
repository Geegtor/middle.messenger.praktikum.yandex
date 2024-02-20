
import AppStore from "../types";
import EventBus from "./base/event-bus";

export enum StoreEvents  { 
    Updated = "Updated"
}

class Store extends EventBus {
    private _state: AppStore = {} as AppStore;

    constructor() {
        super();
        this.init();
    }

    public init() {
        this._init();
    }
    
    public clear() {
        this._clear();
    }

    private _init() {
        if (!window.store) {
            const sessionState = sessionStorage.getItem("state");
            const state = sessionState ? JSON.parse(sessionState) as AppStore : new AppStore();
            this._state = state;
            window.store = this;
            sessionStorage.setItem("state", JSON.stringify(this._state));
        }
    }

    private _clear() {
        if(window.store) {
            const emptyStore = new AppStore();
            this._state = emptyStore;
            window.store.set(emptyStore);
            sessionStorage.set("state", JSON.stringify(emptyStore));
        }
    }

    public getState() {
        return this._state;
    }

    public set(nextState: Partial<AppStore>) {
        const prevState = {...this._state};
        this._state = {...this._state, ...nextState};
        this.emit(StoreEvents.Updated, prevState, nextState);
        sessionStorage.setItem("state", JSON.stringify(this._state));
    }
}

const store = new Store();
export { store as Store };
