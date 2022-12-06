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
    Paste the following code, depending on what kind of project you are making:
    - JavaScript
        - Node - The default export is for a JavaScript Node project.
            ```json
            {
                "extends": "@oathompsonjones/eslint-config"
            }
            ```
            You can also do use
            ```json
            {
                "extends": "@oathompsonjones/eslint-config/JavaScript/Node"
            }
            ```
        - Browser
            ```json
            {
                "extends": "@oathompsonjones/eslint-config/JavaScript/Browser"
            }
            ```
        - React
            ```json
            {
                "extends": "@oathompsonjones/eslint-config/JavaScript/React"
            }
            ```
    - TypeScript
        - Node
            ```json
            {
                "extends": "@oathompsonjones/eslint-config/TypeScript/Node",
                "parserOptions": {
                    "project": "./tsconfig.json"
                }
            }
            ```
        - Browser
            ```json
            {
                "extends": "@oathompsonjones/eslint-config/TypeScript/Browser",
                "parserOptions": {
                    "project": "./tsconfig.json"
                }
            }
            ```
        - React
            ```json
            {
                "extends": "@oathompsonjones/eslint-config/TypeScript/React",
                "parserOptions": {
                    "project": "./tsconfig.json"
                }
            }
            ```

- Step 3: You're done!