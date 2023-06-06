const jsRules = require("../Rules/JavaScript");
const reactRules = require("../Rules/React");
const nextRules = require("../Rules/Next");
const { PLUGINS } = require("../Constants");

module.exports = {
    env: { browser: true, es2022: true, node: true },
    extends: [PLUGINS.ESLINT, PLUGINS.REACT, PLUGINS.NEXT],
    ignorePatterns: ["build"],
    parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: "latest", sourceType: "module" },
    plugins: ["react", "@next/next"],
    root: true,
    rules: { ...jsRules, ...reactRules, ...nextRules },
    settings: { react: { version: "detect" } }
};
