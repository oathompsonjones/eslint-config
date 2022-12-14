const { ERROR, OFF, ALWAYS, NEVER } = require("./Constants");

const supportedTypeScriptEslintRules = Object.fromEntries(Object.entries({
    "array-type":                      [ERROR, { default: "array-simple" }],
    "camel-case":                      OFF,
    "member-delimiter-style":          [ERROR, { multiline: { delimiter: "semi", requireLast: true }, multilineDetection: "brackets", singleline: { delimiter: "semi", requireLast: true } }],
    "naming-convention":               [ERROR, { format: ["camelCase"], leadingUnderscore: "allow", selector: "default", trailingUnderscore: "allow" }, { format: ["camelCase", "UPPER_CASE", "PascalCase"], leadingUnderscore: "allow", selector: ["property", "variableLike"], trailingUnderscore: "allow" }, { format: ["PascalCase"], selector: ["typeLike", "enum", "enumMember"] }, { format: ["camelCase", "PascalCase"], selector: "function" }],
    "no-confusing-void-expression":    OFF,
    "no-inferrable-types":             OFF,
    "no-non-null-assertion":           OFF,
    "no-require-imports":              OFF,
    "no-this-alias":                   [ERROR, { allowedNames: ["self", "that"] }],
    "no-type-alias":                   OFF,
    "parameter-properties":            OFF,
    "prefer-readonly-parameter-types": OFF,
    "typedef":                         OFF,
    // eslint-disable-next-line id-length
    "unified-signatures":              [ERROR, { ignoreDifferentlyNamedParameters: true }]
}).map(([key, value]) => [`@typescript-eslint/${key}`, value]));

let extensionTypeScriptEslintRules = {
    "brace-style":                 ERROR,
    "comma-dangle":                ERROR,
    "comma-spacing":               ERROR,
    "default-param-last":          ERROR,
    "dot-notation":                ERROR,
    "func-call-spacing":           ERROR,
    "indent":                      [ERROR, 4, { SwitchCase: 1 }],
    "init-declarations":           OFF,
    "keyword-spacing":             [ERROR, { after: true, before: true, overrides: {} }],
    "lines-between-class-members": ERROR,
    "no-array-constructor":        ERROR,
    "no-dupe-class-members":       ERROR,
    "no-duplicate-imports":        ERROR,
    "no-empty-function":           ERROR,
    "no-extra-parens":             [ERROR, "all", { enforceForArrowConditionals: false, ignoreJSX: "all", returnAssign: false }],
    "no-extra-semi":               ERROR,
    "no-implied-eval":             ERROR,
    "no-invalid-this":             ERROR,
    "no-loop-func":                ERROR,
    "no-loss-of-precision":        ERROR,
    "no-magic-numbers":            OFF,
    "no-redeclare":                ERROR,
    "no-restricted-imports":       ERROR,
    "no-shadow":                   ERROR,
    "no-throw-literal":            ERROR,
    "no-unused-expressions":       ERROR,
    "no-unused-vars":              ERROR,
    "no-use-before-define":        ERROR,
    "no-useless-constructor":      ERROR,
    "object-curly-spacing":        [ERROR, ALWAYS],
    // TODO padding-line-between-statements
    "quotes":                      ERROR,
    "require-await":               ERROR,
    "return-await":                ERROR,
    "semi":                        ERROR,
    "space-before-blocks":         ERROR,
    "space-before-function-paren": [ERROR, { anonymous: ALWAYS, asyncArrow: ALWAYS, named: NEVER }],
    "space-infix-ops":             ERROR
};
extensionTypeScriptEslintRules = Object.fromEntries([
    ...Object.entries(extensionTypeScriptEslintRules).map(([key]) => [key, OFF]),
    ...Object.entries(extensionTypeScriptEslintRules).map(([key, value]) => [`@typescript-eslint/${key}`, value])
]);

module.exports = { ...supportedTypeScriptEslintRules, ...extensionTypeScriptEslintRules };
