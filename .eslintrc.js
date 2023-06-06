const jsRules = require("./Rules/JavaScript");
const tsRules = require("./Rules/TypeScript");
const reactRules = require("./Rules/React");
const nextRules = require("./Rules/Next");
const { PLUGINS } = require("./Constants");

module.exports = {
    env: { es2022: true, node: true },
    extends: [PLUGINS.ESLINT],
    ignorePatterns: ["build", "bin", "node_modules"],
    overrides: [
        {
            extends: [PLUGINS.ESLINT, PLUGINS.TYPESCRIPT],
            files: "**/*.ts",
            parser: "@typescript-eslint/parser",
            plugins: ["@typescript-eslint"],
            rules: { ...jsRules, ...tsRules }
        },
        {
            env: { browser: true, es2022: true, node: true },
            extends: [PLUGINS.ESLINT, PLUGINS.REACT, PLUGINS.NEXT],
            files: "**/*.jsx",
            parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: "latest", sourceType: "module" },
            plugins: ["react", "@next/next"],
            rules: { ...jsRules, ...reactRules, ...nextRules },
            settings: { react: { version: "detect" } }
        },
        {
            env: { browser: true, es2022: true, node: true },
            extends: [PLUGINS.ESLINT, PLUGINS.TYPESCRIPT, PLUGINS.REACT, PLUGINS.NEXT],
            files: "**/*.tsx",
            parser: "@typescript-eslint/parser",
            parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: "latest", sourceType: "module" },
            plugins: ["@typescript-eslint", "react", "@next/next"],
            rules: { ...jsRules, ...tsRules, ...reactRules, ...nextRules },
            settings: { react: { version: "detect" } }
        }
    ],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    root: true,
    rules: jsRules
};
