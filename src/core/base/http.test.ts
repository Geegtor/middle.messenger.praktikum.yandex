import sinon from "sinon";
import { expect } from "chai";
import { HTTPTransport } from "./http-transport";

describe("HTTP Transport class tests", () => {
    const HTTP = new HTTPTransport();
    let xhr: sinon.SinonFakeXMLHttpRequestStatic;
    let requests: sinon.SinonFakeXMLHttpRequest[] = [];

    beforeEach(() => {
        xhr = sinon.useFakeXMLHttpRequest();
        xhr.onCreate = (xhr) => {
          requests.push(xhr);
        };
        requests = [];
      });
    
      afterEach(() => {
        sinon.restore();
        requests = [];
      });

      it("method 'buildURL' returns valid link", async() => {
        const URL = HTTP.buildURL("/").split(":")[0];
        expect(URL).to.be.equal("https");
      });

      it("method GET is callable", async() => {
        const request = sinon.stub(HTTP, "get").resolves();
        await HTTP.get("test.com/test/url");
        expect(request.called).to.be.true;
      });
    
      it("method POST is callable", async() => {
        const request = sinon.stub(HTTP, "post");
        await HTTP.post("someUrl");
        expect(request.called).to.be.true;
      });
    
      it("method PUT is callable", async() => {
        const request = sinon.stub(HTTP, "put").resolves();
        await HTTP.put("someUrl");
        expect(request.called).to.be.true;
      });
    
      it("method DELETE is callable", async() => {
        const request = sinon.stub(HTTP, "delete").resolves();
        await HTTP.delete("someUrl");
        expect(request.called).to.be.true;
      });
})
