const jsRules = require("../Rules/JavaScript");
const tsRules = require("../Rules/TypeScript");
const reactRules = require("../Rules/React");
const tsReactRules = require("../Rules/TypeScriptReact");

module.exports = {
    env:            { browser: true, es6: true, node: true },
    extends:        ["eslint:all", "plugin:@typescript-eslint/all", "plugin:react/all"],
    ignorePatterns: ["build"],
    parser:         "@typescript-eslint/parser",
    parserOptions:  { ecmaFeatures: { jsx: true }, ecmaVersion: "latest", sourceType: "module" },
    plugins:        ["@typescript-eslint", "react"],
    root:           true,
    rules:          { ...jsRules, ...tsRules, ...reactRules, ...tsReactRules },
    settings:       { react: { version: "detect" } }
};
