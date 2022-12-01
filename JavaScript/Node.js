const jsRules = require("../Rules/JavaScript");

module.exports = {
    env:           { es6: true, node: true },
    extends:       "eslint:all",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    root:          true,
    rules:         jsRules
};
