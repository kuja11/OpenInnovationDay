import "reflect-metadata";
import express from "express";
import { Application } from "express";
import { createCombinedHandler, useContainer } from "cds-routing-handlers";
import InitDIContainer from "./dependencies.mock";
import Container from "typedi";
import cds from "@sap/cds";
import BasicFunctionAllHandler from "../../src/api/functions/BasicFunctionAllHandler";

export default class MockServer {

    public static async Run(): Promise<Application> {
        const app = express();

        // First we register our handlers and middleware
        const hdl = createCombinedHandler({
            handler: [
                BasicFunctionAllHandler
            ]
        });

        // We then tell CDS to server our project with our custom logic
        await cds
            .serve("all")
            .at("odata")
            .with(srv => hdl(srv))
            .in(app);

        // Setup the DI Container
        await InitDIContainer();

        // Needed by our handler constructor for dependency injection
        useContainer(Container);

        return app;
    }

}
