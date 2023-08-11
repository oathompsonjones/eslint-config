const { ERROR_LEVEL: { ERROR, WARN, OFF, AS_NEEDED, CONSISTENT, CONSISTENT_AS_NEEDED, ALWAYS, NEVER } } = require("../Constants");

const jsRules = {
    "accessor-pairs": OFF,
    "array-bracket-newline": [ERROR, { multiline: true }],
    "array-element-newline": [ERROR, CONSISTENT],
    "arrow-body-style": [ERROR, AS_NEEDED],
    "complexity": OFF,
    "consistent-return": OFF,
    "consistent-this": OFF,
    "curly": [ERROR, "multi-or-nest", CONSISTENT],
    "default-case": OFF,
    "dot-location": [ERROR, "property"],
    "func-names": [ERROR, AS_NEEDED],
    "func-style": [ERROR, "declaration", { allowArrowFunctions: true }],
    "function-call-argument-newline": [ERROR, CONSISTENT],
    "function-paren-newline": [ERROR, CONSISTENT],
    "generator-star-spacing": [ERROR, { after: true, before: false }],
    "guard-for-in": OFF,
    "id-length": [ERROR, { max: 30, min: 1 }],
    "indent": [ERROR, 4, { SwitchCase: 1 }],
    "init-declarations": OFF,
    "line-comment-position": OFF,
    "lines-around-comment": OFF,
    "max-depth": [ERROR, { max: 5 }],
    "max-len": [ERROR, { code: 135 }],
    "max-lines": [ERROR, { max: 750, skipBlankLines: true, skipComments: true }],
    "max-lines-per-function": [ERROR, { max: 150, skipBlankLines: true, skipComments: true }],
    "max-params": [ERROR, 5],
    "max-statements": [ERROR, 25],
    "multiline-comment-style": OFF,
    "multiline-ternary": OFF,
    "new-cap": OFF,
    "newline-per-chained-call": OFF,
    "no-bitwise": OFF,
    "no-confusing-void": OFF,
    "no-console": WARN,
    "no-continue": OFF,
    "no-div-regex": OFF,
    "no-else-return": [ERROR, { allowElseIf: false }],
    "no-extra-parens": [ERROR, "all", { enforceForArrowConditionals: false, ignoreJSX: "all", returnAssign: false }],
    "no-fallthrough": OFF,
    "no-implicit-coercion": [ERROR, { allow: ["!!"] }],
    "no-inline-comments": OFF,
    "no-inner-declarations": OFF,
    "no-labels": OFF,
    "no-magic-numbers": [
        ERROR, {
            ignore: [-1, 0, 1],
            ignoreArrayIndexes: true,
            ignoreClassFieldInitialValues: true,
            ignoreDefaultValues: true
        }
    ],
    "no-mixed-operators": OFF,
    "no-param-reassign": OFF,
    "no-plusplus": OFF,
    "no-ternary": OFF,
    "no-undefined": OFF,
    "no-underscore-dangle": OFF,
    "no-use-before-define": [ERROR, { functions: false }],
    "no-void": OFF,
    "no-warning-comments": OFF,
    "nonblock-statement-body-position": [ERROR, "below"],
    "object-curly-newline": [ERROR, { multiline: true }],
    "object-curly-spacing": [ERROR, ALWAYS],
    "object-property-newline": [ERROR, { allowAllPropertiesOnSameLine: true }],
    "one-var": OFF,
    "padded-blocks": [ERROR, NEVER],
    // TODO padding-line-between-statements
    "prefer-named-capture-group": OFF,
    "quote-props": [ERROR, CONSISTENT_AS_NEEDED],
    "space-before-function-paren": [ERROR, { anonymous: ALWAYS, asyncArrow: ALWAYS, named: NEVER }],
    "spaced-comment": [ERROR, ALWAYS, { markers: ["/", "#", "!", "?", "*"] }],
    "wrap-iife": [ERROR, "inside"],
    "yield-star-spacing": [ERROR, "after"]
};

module.exports = jsRules;
