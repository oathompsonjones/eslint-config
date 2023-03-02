const jsRules = require("../Rules/JavaScript");
const tsRules = require("../Rules/TypeScript");

module.exports = {
    env: { es6: true, node: true },
    extends: ["eslint:all", "plugin:@typescript-eslint/all"],
    ignorePatterns: ["build"],
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    plugins: ["@typescript-eslint"],
    root: true,
    rules: { ...jsRules, ...tsRules }
};
