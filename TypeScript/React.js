const jsRules = require("../Rules/JavaScript");
const tsRules = require("../Rules/TypeScript");
const reactRules = require("../Rules/React");

module.exports = {
    env:            { browser: true, es6: true, node: true },
    extends:        ["eslint:all", "plugin:@typescript-eslint/all"],
    ignorePatterns: ["build"],
    parser:         "@typescript-eslint/parser",
    parserOptions:  { ecmaFeatures: { jsx: true }, ecmaVersion: "latest", sourceType: "module" },
    plugins:        ["@typescript-eslint"],
    root:           true,
    rules:          { ...jsRules, ...tsRules, ...reactRules }
};
