const { ERROR } = require("./Constants");

let supportedTypeScriptEslintRules = { "naming-convention": [ERROR, { format: ["camelCase"], leadingUnderscore: "allow", selector: "default", trailingUnderscore: "allow" }, { format: ["camelCase", "UPPER_CASE", "PascalCase"], leadingUnderscore: "allow", selector: "variableLike", trailingUnderscore: "allow" }, { format: ["PascalCase"], selector: "typeLike" }, { format: ["camelCase", "PascalCase"], selector: "function" }] };
supportedTypeScriptEslintRules = Object.fromEntries(Object.entries(supportedTypeScriptEslintRules).map(([key, value]) => [`@typescript-eslint/${key}`, value]));

module.exports = { ...supportedTypeScriptEslintRules };
