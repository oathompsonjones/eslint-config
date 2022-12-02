const jsRules = require("../Rules/JavaScript");

module.exports = {
    env:           { browser: true, es6: true },
    extends:       "eslint:all",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    root:          true,
    rules:         jsRules
};
