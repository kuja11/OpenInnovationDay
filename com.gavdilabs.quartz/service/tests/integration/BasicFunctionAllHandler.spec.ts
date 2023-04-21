import "reflect-metadata";
import chai, { expect } from "chai";
import chaiHttp from 'chai-http';
import { Application } from "express";
import "mocha";
import MockServer from "../mock/server.mock";

chai.use(chaiHttp);

/*
* In integration tests we test whether our logic is behaving correctly with
* each other once the app is running.
*
* In this specific case, this is through a HTTP request to the service, however
* it can also be a test case where 2 internal classes are communicating.
*
* For us to execute and test our HTTP queries, we're using the chai-http library.
*/

describe("BasicFunctionAllHandler Tests", () => {

    describe("On Request Received Tests", () => {
        // Example: "BasicFunctionForAll(msg='World')"
        const basePath = "/odata/BasicFunctionForAll";
        const accept = "application/json";

        let app: Application;

        before(async () => {
             // First we register our handlers and middleware
            app = await MockServer.Run();
        })

        it("Should reject queries without authorization", (done) => {
            chai.request(app)
                .get(`${basePath}(msg='not important')`)
                .accept(accept)
                .end((err, res) => {
                    expect(err).to.equal(null);
                    expect(res).status(401);
                    done();
                });
        })

        it("Should send back a formatted message", (done) => {
            const msg = "from the other side";
            const expected = "Hello from the other side";
            const path = `${basePath}(msg='${msg}')`;

            chai.request(app)
                .get(path)
                .auth("user", "1234")
                .accept(accept)
                .end((err, res) => {
                    expect(err).to.equal(null);
                    expect(res.body.value).to.equal(expected);
                    expect(res).status(200);
                    done();
                });
        })

        it("Should send service error when value is incorrect", (done) => {
            const msg: number = 1;
            chai.request(app)
                .get(`${basePath}(msg=${msg})`)
                .auth("user", "1234")
                .accept(accept)
                .end((err, res) => {
                    expect(err).to.equal(null);
                    expect(res).status(400);
                    done();
                });
        })
    });
});
