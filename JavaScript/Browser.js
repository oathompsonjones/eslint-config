const jsRules = require("../Rules/JavaScript");

module.exports = {
    env:            { browser: true, es2022: true },
    extends:        "eslint:all",
    ignorePatterns: ["build"],
    parserOptions:  { ecmaVersion: "latest", sourceType: "module" },
    root:           true,
    rules:          jsRules
};
