const { ERROR, WARN, OFF, AS_NEEDED, CONSISTENT, CONSISTENT_AS_NEEDED, ALWAYS, NEVER } = require("./Constants");

module.exports = {
    "accessor-pairs":                   OFF,
    "array-bracket-newline":            [ERROR, { multiline: true }],
    "array-element-newline":            [ERROR, CONSISTENT],
    "arrow-body-style":                 [ERROR, AS_NEEDED],
    "complexity":                       OFF,
    "curly":                            [ERROR, "multi-or-nest", CONSISTENT],
    "default-case":                     OFF,
    "dot-location":                     [ERROR, "property"],
    "func-names":                       [ERROR, AS_NEEDED],
    "func-style":                       [ERROR, "declaration", { allowArrowFunctions: true }],
    "function-call-argument-newline":   [ERROR, CONSISTENT],
    "function-paren-newline":           [ERROR, CONSISTENT],
    "generator-star-spacing":           [ERROR, { after: false, before: true }],
    "guard-for-in":                     OFF,
    "id-length":                        [ERROR, { max: 30, min: 1 }],
    "key-spacing":                      [ERROR, { align: "value" }],
    "max-len":                          [ERROR, { code: 100, ignoreRegExpLiterals: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreUrls: true }],
    "max-lines":                        [ERROR, { skipBlankLines: true, skipComments: true }],
    "max-lines-per-function":           [ERROR, { skipBlankLines: true, skipComments: true }],
    "max-params":                       [ERROR, 5],
    "max-statements":                   [ERROR, 25],
    "multiline-comment-style":          [ERROR, "bare-block"],
    "multiline-ternary":                OFF,
    "no-bitwise":                       OFF,
    "no-console":                       WARN,
    "no-continue":                      OFF,
    "no-div-regex":                     OFF,
    "no-else-return":                   [ERROR, { allowElseIf: false }],
    "no-implicit-coercion":             [ERROR, { allow: ["!!"] }],
    "no-labels":                        OFF,
    "no-magic-numbers":                 OFF,
    "no-mixed-operators":               OFF,
    "no-plusplus":                      OFF,
    "no-ternary":                       OFF,
    "no-void":                          OFF,
    "no-warning-comments":              OFF,
    "nonblock-statement-body-position": [ERROR, "below"],
    "object-curly-newline":             [ERROR, { multiline: true }],
    "object-curly-spacing":             [ERROR, ALWAYS],
    "object-property-newline":          [ERROR, { allowAllPropertiesOnSameLine: true }],
    "one-var":                          OFF,
    "padded-blocks":                    [ERROR, NEVER],
    // TODO padding-line-between-statements
    "prefer-name-capture-group":        OFF,
    "quote-props":                      [ERROR, CONSISTENT_AS_NEEDED],
    "space-before-function-paren":      [ERROR, { anonymous: ALWAYS, asyncArrow: ALWAYS, named: NEVER }],
    "wrap-iife":                        [ERROR, "inside"],
    "yield-star-spacing":               [ERROR, { after: false, before: true }]
};
