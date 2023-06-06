const { ERROR_LEVEL: { ALWAYS, ERROR, NEVER, OFF } } = require("../Constants");

const reactRules = Object.fromEntries(Object.entries({
    "boolean-prop-naming": OFF,
    "display-name": OFF,
    "forbid-component-props": OFF,
    "function-component-definition": [ERROR, { namedComponents: "function-declaration", unnamedComponents: "arrow-function" }],
    "jsx-child-element-spacing": OFF,
    "jsx-filename-extension": [ERROR, { extensions: [".jsx", ".tsx"] }],
    "jsx-first-prop-new-line": [ERROR, "multiline-multiprop"],
    "jsx-max-depth": [ERROR, { max: 5 }],
    "jsx-max-props-per-line": OFF,
    "jsx-newline": OFF,
    "jsx-no-bind": OFF,
    "jsx-no-constructed-context-values": OFF,
    "jsx-no-literals": OFF,
    "jsx-one-expression-per-line": OFF,
    "jsx-props-no-spreading": OFF,
    "jsx-tag-spacing": [ERROR, { afterOpening: NEVER, beforeClosing: NEVER, beforeSelfClosing: ALWAYS, closingSlash: NEVER }],
    "jsx-wrap-multilines": [
        ERROR, {
            arrow: "parens-new-line",
            assignment: "parens-new-line",
            condition: "ignore",
            declaration: "parens-new-line",
            logical: "ignore",
            prop: "ignore",
            return: "parens-new-line"
        }
    ],
    "no-adjacent-inline-elements": OFF,
    "no-array-index-key": OFF,
    "no-set-state": OFF,
    "no-unescaped-entities": OFF,
    "prefer-es6-class": [ERROR, NEVER],
    "react-in-jsx-scope": OFF,
    "require-default-props": OFF
}).map(([key, value]) => [`react/${key}`, value]));

module.exports = reactRules;
