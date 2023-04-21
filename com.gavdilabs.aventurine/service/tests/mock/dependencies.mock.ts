import Container from "typedi";

// DI Container retrieval function
export default async function InitDIContainer(): Promise<void> {

    // Our dependency registration goes here!
    Container.set([
        // Dependencies are set using the following structure:
        // {id: 'dependencyID', value: new YourDependency()}
        // OR
        // {id: 'dependencyValue', value: "SomeKeyValue"}
    ]);
}

