/* eslint-disable @typescript-eslint/naming-convention */
import type { RuleConfig } from "eslint-define-config";

export default {
    "react/boolean-prop-naming": "off",
    "react/display-name": "off",
    "react/forbid-component-props": "off",
    "react/function-component-definition": ["error", { namedComponents: "function-declaration", unnamedComponents: "arrow-function" }],
    "react/jsx-child-element-spacing": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
    "react/jsx-max-depth": ["error", { max: 5 }],
    "react/jsx-max-props-per-line": "off",
    "react/jsx-newline": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-no-constructed-context-values": "off",
    "react/jsx-no-literals": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-tag-spacing": [
        "error", {
            afterOpening: "never",
            beforeClosing: "never",
            beforeSelfClosing: "always",
            closingSlash: "never",
        },
    ],
    "react/jsx-wrap-multilines": [
        "error", {
            arrow: "parens-new-line",
            assignment: "parens-new-line",
            condition: "ignore",
            declaration: "parens-new-line",
            logical: "ignore",
            prop: "ignore",
            return: "parens-new-line",
        },
    ],
    "react/no-adjacent-inline-elements": "off",
    "react/no-array-index-key": "off",
    "react/no-set-state": "off",
    "react/no-unescaped-entities": "off",
    "react/prefer-es6-class": ["error", "never"],
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
} as Record<string, RuleConfig>;
