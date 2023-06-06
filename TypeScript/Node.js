const { PLUGINS } = require("../Constants");
const jsRules = require("../Rules/JavaScript");
const tsRules = require("../Rules/TypeScript");

module.exports = {
    env: { es2022: true, node: true },
    extends: [PLUGINS.ESLINT, PLUGINS.TYPESCRIPT],
    ignorePatterns: ["build"],
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    plugins: ["@typescript-eslint"],
    root: true,
    rules: { ...jsRules, ...tsRules }
};
