# @oathompsonjones/eslint-config

This package provides an ESLint configuration for various JavaScript and TypeScript projects, including React/NextJS projects.

### How to use a configuration
- Step 1: Install this package
    Run `npm install @oathompsonjones/eslint-config` to add this package to your project. You do **not** need to install eslint separately.

- Step 2: Create your eslint.config.js file
    Create a file in the root of your project called `eslint.config.js`.
    Paste the following code for plain JavaScript projects:
    ```js
    import createConfig from "./build/index.js";
    export default createConfig();
    ```
    Or the following for TypeScript projects:
    ```js
    import createConfig from "./build/index.js";
    // Replace "./tsconfig.json" with the path to your TypeScript project configuration.
    export default createConfig("./tsconfig.json");
    ```