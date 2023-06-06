const { PLUGINS } = require("../Constants");
const jsRules = require("../Rules/JavaScript");

module.exports = {
    env: { es2022: true, node: true },
    extends: [PLUGINS.ESLINT],
    ignorePatterns: ["build"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    root: true,
    rules: jsRules
};
