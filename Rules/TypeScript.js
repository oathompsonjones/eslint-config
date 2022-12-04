const { ERROR, OFF, ALWAYS, NEVER } = require("./Constants");

const supportedRules = {
    "array-type":                      [ERROR, { default: "array-simple" }],
    "member-delimiter-style":          [ERROR, { multiline: { delimiter: "semi", requireLast: true }, multilineDetection: "brackets", singleline: { delimiter: "semi", requireLast: true } }],
    "no-confusing-void-expression":    OFF,
    "no-inferable-types":              OFF,
    "no-non-null-assertion":           OFF,
    "no-require-imports":              OFF,
    "no-this-alias":                   [ERROR, { allowedNames: ["self", "that"] }],
    "no-type-alias":                   OFF,
    "parameter-properties":            OFF,
    "prefer-readonly-parameter-types": OFF,
    "typedef":                         OFF
};
const formattedSupportedRules = Object.fromEntries(Object.entries(supportedRules).map(([key, value]) => [`@typescript-eslint/${key}`, value]));

const extensionRules = {
    "brace-style":                 ERROR,
    "comma-dangle":                ERROR,
    "comma-spacing":               ERROR,
    "default-param-last":          ERROR,
    "dot-notation":                ERROR,
    "func-call-spacing":           ERROR,
    "indent":                      [ERROR, 4, { SwitchCase: 1 }],
    "init-declarations":           ERROR,
    "keyword-spacing":             [ERROR, { after: true, before: true, overrides: {} }],
    "lines-between-class-members": ERROR,
    "no-array-constructor":        ERROR,
    "no-dupe-class-members":       ERROR,
    "no-duplicate-imports":        ERROR,
    "no-empty-function":           ERROR,
    "no-extra-parens":             ERROR,
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
const formattedExtensionRules = Object.fromEntries([
    ...Object.entries(extensionRules).map(([key]) => [key, OFF]),
    ...Object.entries(extensionRules).map(([key, value]) => [`@typescript-eslint/${key}`, value])
]);

module.exports = {
    ...formattedSupportedRules,
    ...formattedExtensionRules
};
