import Container from "typedi";
import ExternalServiceFactory from "./core/services/ExternalServiceFactory";
import { LoggingMiddleware } from "./middleware/LoggingMiddleware";
import Northwind from "./services/Northwind";
import Postgres from "./services/Postgres";
import SuccessFactors from "./services/SuccessFactors";

// DI Container retrieval function
export default async function InitDIContainer(): Promise<void> {

    // Our dependency registration goes here!
    Container.set([
        // Dependencies are set using the following structure:
        // {id: 'dependencyID', value: new YourDependency()}
        // OR
        // {id: 'dependencyValue', value: "SomeKeyValue"}
        {id: 'sf', value: await ExternalServiceFactory.createInstance(SuccessFactors)},
        {id: 'postgres', value: await ExternalServiceFactory.createInstance(Postgres)},
        {id: 'middleware-loggin', value: new LoggingMiddleware()}
    ]);
}
