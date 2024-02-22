import sinon from "sinon";
import { expect } from "chai";
import { Route } from "../route";

import { RouterClass } from "../router";
import Block, { Props } from "./block";

describe("A Mocha init test", () => {
    it("Simple green test:", function (done) {
        setImmediate(done);
    });
})

describe("Router tests", () => {
    let TestRouter: RouterClass;
    let TestComponent: typeof Block;

    before(() => {
        class TestClass extends Block {
            constructor(props: Props){
                super(props);
            }
            protected render() {
                return "<div>data</div>"
            } 
        }
        TestComponent = new TestClass({}) as unknown as typeof Block;
        TestRouter = new RouterClass("#app");
    })

    it("method 'getRoute' returns Route instace", () => {
        TestRouter.use("/path", TestComponent);
        const route = TestRouter.getRoute("/path");
        const falseRoute = TestRouter.getRoute("/falsy");

        expect(route).to.be.an.instanceof(Route);
        expect(falseRoute).to.be.null;
    })

    it("method 'start' inits routing:", () => {
        const stub = sinon.stub();
        TestRouter._onRoute = stub;
        TestRouter.start();
        expect(stub.called).to.be.true;
    });

    it("method 'go' changes history", () => {
        TestRouter.go("/path");
        expect(window.history.length).to.eq(2);
    });

    it("method 'back' triggers history.back", () => {
        const spy = sinon.spy(window.history, "back");
        TestRouter.back();
        expect(spy.calledOnce).to.be.true;
    });
    
      it("method 'forward' triggers history.forward", () => {
        const forwardSpy = sinon.spy(window.history, "forward");
        TestRouter.forward();
        expect(forwardSpy.calledOnce).to.be.true;
    });
})
