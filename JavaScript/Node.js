const rules = require("../Rules/JavaScript");

module.exports = {
    env:           { node: true },
    extends:       "eslint:all",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    root:          true,
    rules
};
