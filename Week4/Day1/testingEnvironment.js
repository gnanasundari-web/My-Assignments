"use strict";
var Environment;
(function (Environment) {
    Environment["LOCAL"] = "local";
    Environment["DEVELOPMENT"] = "development";
    Environment["STAGING"] = "staging";
    Environment["PRODUCTION"] = "production";
})(Environment || (Environment = {}));
function runTests(env) {
    console.log("Running tests in", env, "environment...");
}
runTests(Environment.LOCAL);
//runTests(Environment.DEVELOPMENT);
