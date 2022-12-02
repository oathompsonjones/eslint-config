const jsRules = require("../Rules/JavaScript");
const reactRules = require("../Rules/React");

module.exports = {
    env:            { browser: true, es6: true, node: true },
    extends:        "eslint:all",
    ignorePatterns: ["build"],
    parserOptions:  { ecmaFeatures: { jsx: true }, ecmaVersion: "latest", sourceType: "module" },
    root:           true,
    rules:          { ...jsRules, ...reactRules }
};
