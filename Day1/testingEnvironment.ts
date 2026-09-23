enum Environment {
    LOCAL = "local",
    DEVELOPMENT = "development",
    STAGING = "staging",
    PRODUCTION = "production"
}

function runTests(env: Environment): void {
    console.log("Running tests in",env, "environment...");
}

runTests(Environment.LOCAL);
//runTests(Environment.DEVELOPMENT);