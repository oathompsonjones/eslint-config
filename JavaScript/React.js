const jsRules = require("../Rules/JavaScript");
const reactRules = require("../Rules/React");

module.exports = {
    env: { browser: true, es2022: true, node: true },
    extends: ["eslint:all", "plugin:react/all"],
    ignorePatterns: ["build"],
    parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: "latest", sourceType: "module" },
    plugins: ["react"],
    root: true,
    rules: { ...jsRules, ...reactRules },
    settings: { react: { version: "detect" } }
};
