type Listeners = Record<string, Array<CallableFunction>>;

export default class EventBus {
    private listeners: Listeners;

    constructor() {
        this.listeners = {};
    }

    on(event: string, callback: CallableFunction) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }

    off(event: string, callback: CallableFunction) {
        if (!this.listeners[event]) {
            throw {message: `No event "${event}" found`}
        }
        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        )
    }

    emit(event: string, ...args: Array<unknown>) {
        if (!this.listeners[event]) {
            throw {message: `No event "${event}" found`}
        }
        this.listeners[event].forEach(
            listener => listener(...args)
        )
    }
}
