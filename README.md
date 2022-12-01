# @oathompsonjones/eslintrc

This package provides ESLint configurations for various types of JavaScript or TypeScript projects.

### Supported Configurations
- JavaScript
    - [x] Node
    - [ ] React
    - [ ] Browser
- TypeScript
    - [ ] Node
    - [ ] React
    - [ ] Browser

### How to use a configuration
- Step 1: Install this package
Run `npm install @oathompsonjones/eslintrc` to add this package to your project. You do **not** need to install eslint separately.

- Step 2: Create your .eslintrc file
Create a file in the root of your project called `.eslintrc.js`.
This file will import a config file from the package, then export it.
The file path to require will be of the form `@oathompsonjones/eslintrc/{Language}/{Type}`.
Paste the following code, depending on what kind of project you are making:
    - JavaScript
        - Node - The default export is for a JavaScript Node project.
            ```js
            module.exports = require("@oathompsonjones/eslintrc");
            ```
            You can also do use
            ```js
            module.exports = require("@oathompsonjones/eslintrc/JavaScript/Node");
            ```
        - Browser
            ```js
            module.exports = require("@oathompsonjones/eslintrc/JavaScript/Browser");
            ```
        - React
            ```js
            module.exports = require("@oathompsonjones/eslintrc/JavaScript/React");
            ```
    - TypeScript
        - Node
            ```js
            module.exports = require("@oathompsonjones/eslintrc/TypeScript/Node");
            ```
        - Browser
            ```js
            module.exports = require("@oathompsonjones/eslintrc/TypeScript/Browser");
            ```
        - React
            ```js
            module.exports = require("@oathompsonjones/eslintrc/TypeScript/React");
            ```

- Step 3: You're done!