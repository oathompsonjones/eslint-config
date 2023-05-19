# @oathompsonjones/eslint-config

This package provides ESLint configurations for various types of JavaScript or TypeScript projects.

### Supported Configurations
- JavaScript
    - [x] Node
    - [x] React
    - [x] Browser
- TypeScript
    - [x] Node
    - [x] React
    - [x] Browser

### How to use a configuration
- Step 1: Install this package
    Run `npm install @oathompsonjones/eslint-config` to add this package to your project. You do **not** need to install eslint separately.

- Step 2: Create your .eslintrc file
    Create a file in the root of your project called `.eslintrc`.
    Paste the following code:
    ```json
    {
        "extends": "@oathompsonjones/eslint-config"
    }
    ```
    This will enable the default configuration, which is suitable for most use cases, as it will automatically adapt the configuration for each file type (js/ts/jsx/tsx).
    You can also specify JavaScript vs TypeScript, and which environment you are using like this:
    ```json
    {
        "extends": "@oathompsonjones/eslint-config/[JavaScript|TypeScript]/[Node|Browser|React]"
    }
    ```