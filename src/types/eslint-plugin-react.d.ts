/* eslint-disable @typescript-eslint/naming-convention */
// TODO - add proper types to these rules.
declare module "eslint-plugin-react" {
    export = {
        rules: {
            "boolean-prop-naming": "off",
            "display-name": "off",
            "forbid-component-props": "off",
            "function-component-definition": [
                "error", {
                    namedComponents: "function-declaration",
                    unnamedComponents: "arrow-function",
                },
            ],
            "jsx-child-element-spacing": "off",
            "jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
            "jsx-first-prop-new-line": ["error", "multiline-multiprop"],
            "jsx-max-depth": ["error", { max: 5 }],
            "jsx-max-props-per-line": "off",
            "jsx-newline": "off",
            "jsx-no-bind": "off",
            "jsx-no-constructed-context-values": "off",
            "jsx-no-literals": "off",
            "jsx-one-expression-per-line": "off",
            "jsx-props-no-spreading": "off",
            "jsx-tag-spacing": [
                "error", {
                    afterOpening: "never",
                    beforeClosing: "never",
                    beforeSelfClosing: "always",
                    closingSlash: "never",
                },
            ],
            "jsx-wrap-multilines": [
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
            "no-adjacent-inline-elements": "off",
            "no-array-index-key": "off",
            "no-set-state": "off",
            "no-unescaped-entities": "off",
            "prefer-es6-class": ["error", "never"],
            "react-in-jsx-scope": "off",
            "require-default-props": "off",
        },
    };
}
