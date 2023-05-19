const jsRules = require("./Rules/JavaScript");
const tsRules = require("./Rules/TypeScript");
const reactRules = require("./Rules/React");
const tsReactRules = require("./Rules/TypeScriptReact");

module.exports = {
    env: { es2022: true, node: true },
    extends: ["eslint:all"],
    ignorePatterns: ["build", "bin", "node_modules"],
    overrides: [
        {
            extends: ["eslint:all", "plugin:@typescript-eslint/all"],
            files: "**/*.ts",
            parser: "@typescript-eslint/parser",
            plugins: ["@typescript-eslint"],
            rules: { ...jsRules, ...tsRules }
        },
        {
            env: { browser: true, es2022: true, node: true },
            extends: ["eslint:all", "plugin:react/all"],
            files: "**/*.jsx",
            parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: "latest", sourceType: "module" },
            plugins: ["react"],
            rules: { ...jsRules, ...reactRules },
            settings: { react: { version: "detect" } }
        },
        {
            env: { browser: true, es2022: true, node: true },
            extends: ["eslint:all", "plugin:@typescript-eslint/all", "plugin:react/all"],
            files: "**/*.tsx",
            parser: "@typescript-eslint/parser",
            parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: "latest", sourceType: "module" },
            plugins: ["@typescript-eslint", "react"],
            rules: { ...jsRules, ...tsRules, ...reactRules, ...tsReactRules },
            settings: { react: { version: "detect" } }
        }
    ],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    root: true,
    rules: jsRules
};
