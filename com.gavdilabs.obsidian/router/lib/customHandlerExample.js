

const exampleData = {
    "Solution": "OpenInnovation Solution",
    "AppVer": "1.0.0"
}

export default async function exampleCustomHandler(req, res, next) {
    res.end(exampleData);
}
