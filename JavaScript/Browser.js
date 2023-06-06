const { PLUGINS } = require("../Constants");
const jsRules = require("../Rules/JavaScript");

module.exports = {
    env: { browser: true, es6: true },
    extends: [PLUGINS.ESLINT],
    ignorePatterns: ["build"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    root: true,
    rules: jsRules
};
