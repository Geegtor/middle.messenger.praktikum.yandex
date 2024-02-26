import { expect } from "chai";
import sinon from "sinon";
import Block, { Props } from "./block";

describe("Block class test", () => {
    let Component: typeof Block;
  
    before(() => {
        class ComponentClass extends Block {
            constructor(props: Props & { prop: string}){
                super({
                    ...props,
                })
            }

            protected render() {
                return (`<div>${this.props?.prop}</div>`)
            }
        }

        Component = ComponentClass as typeof Block;
    })

    it("component gets prop and set into rednered element", () => {
        const component = new Component({ prop: "test" } as Props);
        const componentTitle = component.getContent()?.innerHTML;

        expect(componentTitle).to.eq("test");
    });

    it("component handles events via 'events' props", () => {
        const handler = sinon.stub();
        const component = new Component({
          events: {
            click: handler,
          },
        } as Props);
    
        const event = new MouseEvent("click");
        component.getContent()?.dispatchEvent(event);

        expect(handler.calledOnce).to.be.true;
    });

    it("Вызывается перерендер компонента, если его свойства изменились", () => {
        const newProp = "test update prop";
        const component = new Component({ prop: "test" } as Props);

        component.setProps({ prop: newProp } as Props);
        const componentTitle = component.getContent()?.innerHTML;
        
        expect(componentTitle).to.eq(newProp);
    });
})
