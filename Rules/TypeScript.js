/* eslint-disable no-magic-numbers */
const { ERROR_LEVEL: { ERROR, OFF, ALWAYS, NEVER } } = require("../Constants");

const rules = {
    "array-type": [ERROR, { default: "array-simple" }],
    "brace-style": ERROR,
    "camel-case": OFF,
    "comma-dangle": ERROR,
    "comma-spacing": ERROR,
    "consistent-type-imports": ERROR,
    "default-param-last": ERROR,
    "dot-notation": ERROR,
    "func-call-spacing": ERROR,
    "indent": [ERROR, 4, { SwitchCase: 1 }],
    "init-declarations": OFF,
    "keyword-spacing": ERROR,
    "lines-around-comment": OFF,
    "lines-between-class-members": ERROR,
    "max-params": [ERROR, { max: 5 }],
    "member-delimiter-style": [
        ERROR, {
            multiline: { delimiter: "semi", requireLast: true },
            multilineDetection: "brackets",
            singleline: { delimiter: "semi", requireLast: true }
        }
    ],
    "naming-convention": [
        ERROR, {
            format: ["camelCase"],
            leadingUnderscore: "allow",
            selector: "default",
            trailingUnderscore: "allow"
        }, {
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
            leadingUnderscore: "allow",
            selector: ["property", "variableLike", "import"],
            trailingUnderscore: "allow"
        }, {
            format: ["PascalCase"],
            selector: ["typeLike", "enum", "enumMember"]
        }, {
            format: ["camelCase", "PascalCase"],
            selector: "function"
        }
    ],
    "no-array-constructor": ERROR,
    "no-confusing-void-expression": OFF,
    "no-dupe-class-members": ERROR,
    "no-empty-function": ERROR,
    "no-empty-interface": [ERROR, { allowSingleExtends: true }],
    "no-extra-parens": [ERROR, "all", { enforceForArrowConditionals: false, ignoreJSX: "all", returnAssign: false }],
    "no-extra-semi": ERROR,
    "no-implied-eval": ERROR,
    "no-inferrable-types": [ERROR, { ignoreParameters: true, ignoreProperties: true }],
    "no-invalid-this": ERROR,
    "no-loop-func": ERROR,
    "no-loss-of-precision": ERROR,
    "no-magic-numbers": OFF,
    "no-non-null-assertion": OFF,
    "no-redeclare": ERROR,
    "no-require-imports": OFF,
    "no-restricted-imports": ERROR,
    "no-shadow": ERROR,
    "no-this-alias": OFF,
    "no-throw-literal": ERROR,
    "no-type-alias": OFF,
    "no-unused-expressions": ERROR,
    "no-unused-vars": ERROR,
    "no-use-before-define": [ERROR, { functions: false }],
    "no-useless-constructor": ERROR,
    "object-curly-spacing": [ERROR, ALWAYS],
    // TODO padding-line-between-statements
    "parameter-properties": OFF,
    "prefer-readonly-parameter-types": OFF,
    "quotes": ERROR,
    "require-await": ERROR,
    "return-await": ERROR,
    "semi": ERROR,
    "space-before-blocks": ERROR,
    "space-before-function-paren": [ERROR, { anonymous: ALWAYS, asyncArrow: ALWAYS, named: NEVER }],
    "space-infix-ops": ERROR,
    "typedef": OFF,
    "unified-signatures": OFF
};

for (const key in rules) {
    rules[`@typescript-eslint/${key}`] = rules[key];
    rules[key] = OFF;
}

module.exports = rules;
