import Block, { Props } from "../core/base/block"
import  { StoreClass, StoreEvents } from "../core/store"
import AppStore from "../types"
import compare from "./compare"


export function connect(mapStateToProps: (state: AppStore) => Partial<AppStore>) {
    return function (Component: typeof Block) {
        return class extends Component {
            private onChangeStoreCallback: () => void;  
            constructor(props: Props) {
                const store: StoreClass = <StoreClass>window.store;
                let state = mapStateToProps(store.getState());

                super({...props, ...state});
                this.onChangeStoreCallback = () => {
                    const newState = mapStateToProps(store.getState());

                    if (!compare(state, newState)) {
                        this.setProps({...newState});
                    }
                    state = newState;
                }

                store.on(StoreEvents.Updated, this.onChangeStoreCallback);
            }
        }
    }
}
