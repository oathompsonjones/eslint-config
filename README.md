# @oathompsonjones/eslint-config

This package provides an ESLint configuration for various JavaScript and TypeScript projects, including React/NextJS projects.

### How to use a configuration
- Step 1: Install this package
    Run `npm install @oathompsonjones/eslint-config` to add this package to your project. You do **not** need to install eslint separately.

- Step 2: Create your eslint.config.js file
    Create a file in the root of your project called `eslint.config.js`, with the following code.
    ```js
    // @ts-check
    import createConfig from "@oathompsonjones/eslint-config";

    export default createConfig();
    ```

    The `createConfig` function can also take an options object with the following optional properties:
    `rules` – Extra rules to add to your ESLint config.
    `useTypeScript: boolean` – Whether or not to use TypeScript. Defaults to true.
    `tsConfig: string` – The path to your tsconfig.json file if using TypeScript. Defaults to `tsconfig.json` in the root of your project.
    `useNextJS: boolean` – Whether or not to use NextJS. Defaults to false.
    `pagesDirectory: string` – The path to your pages directory if using NextJS. Defaults to `src/app`.