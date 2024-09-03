/* eslint-disable @typescript-eslint/naming-convention, sort-keys */
import type { EslintRules, RuleConfig } from "eslint-define-config";
import type { RuleOptions as TypeScriptRules } from "@eslint-types/typescript-eslint/types";

type TypeScriptRuleReplacements = {
    [K in keyof TypeScriptRules as K extends `@typescript-eslint/${infer T}`
        ? T : never]: RuleConfig<TypeScriptRules[K]>;
};

type Rules =
    // JS rules to switch off without TypeScript alternatives
    & { [_ in "camelcase" | "no-duplicate-imports"]: "off"; }
    // JS rules to switch off with TypeScript alternatives
    & { [K1 in keyof TypeScriptRuleReplacements as K1 extends keyof EslintRules ? K1 : never]: "off"; }
    // TypeScript rules
    & { [K2 in keyof TypeScriptRules]: RuleConfig<TypeScriptRules[K2]>; };

export default {
    "no-duplicate-imports": "off",

    "@typescript-eslint/adjacent-overload-signatures": "error",

    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],

    "@typescript-eslint/await-thenable": "error",

    "@typescript-eslint/ban-ts-comment": "error",

    "@typescript-eslint/ban-tslint-comment": "error",

    "@typescript-eslint/ban-types": "error",

    "@typescript-eslint/block-spacing": "error",
    "block-spacing": "off",

    "@typescript-eslint/brace-style": "error",
    "brace-style": "off",

    "@typescript-eslint/class-literal-property-style": "error",

    "@typescript-eslint/class-methods-use-this": "error",
    "class-methods-use-this": "off",

    "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
    "comma-dangle": "off",

    "@typescript-eslint/comma-spacing": "error",
    "comma-spacing": "off",

    "@typescript-eslint/consistent-generic-constructors": "error",

    "@typescript-eslint/consistent-indexed-object-style": "error",

    "@typescript-eslint/consistent-return": ["error", { treatUndefinedAsUnspecified: true }],
    "consistent-return": "off",

    "@typescript-eslint/consistent-type-assertions": "error",

    "@typescript-eslint/consistent-type-definitions": ["error", "type"],

    "@typescript-eslint/consistent-type-exports": "error",

    "@typescript-eslint/consistent-type-imports": "error",

    "@typescript-eslint/default-param-last": "error",
    "default-param-last": "off",

    "@typescript-eslint/dot-notation": "error",
    "dot-notation": "off",

    "@typescript-eslint/explicit-function-return-type": "error",

    "@typescript-eslint/explicit-member-accessibility": "error",

    "@typescript-eslint/explicit-module-boundary-types": "error",

    "@typescript-eslint/func-call-spacing": "error",
    "func-call-spacing": "off",

    "@typescript-eslint/indent": ["error", 4, { SwitchCase: 1 }],
    indent: "off",

    "@typescript-eslint/init-declarations": "off",
    "init-declarations": "off",

    "@typescript-eslint/key-spacing": "error",
    "key-spacing": "off",

    "@typescript-eslint/keyword-spacing": "error",
    "keyword-spacing": "off",

    "@typescript-eslint/lines-around-comment": "off",
    "lines-around-comment": "off",

    "@typescript-eslint/lines-between-class-members": "error",
    "lines-between-class-members": "off",

    "@typescript-eslint/max-params": ["error", { max: 5 }],
    "max-params": "off",

    "@typescript-eslint/member-delimiter-style": [
        "error", {
            multiline: {
                delimiter: "semi",
                requireLast: true,
            },
            singleline: {
                delimiter: "semi",
                requireLast: true,
            },
        },
    ],

    "@typescript-eslint/member-ordering": "error",

    "@typescript-eslint/method-signature-style": "error",

    "@typescript-eslint/naming-convention": [
        "error", {
            format: ["camelCase"],
            leadingUnderscore: "allow",
            selector: "default",
            trailingUnderscore: "allow",
        }, {
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
            leadingUnderscore: "allow",
            selector: ["property", "variableLike", "import"],
            trailingUnderscore: "allow",
        }, {
            format: ["PascalCase"],
            selector: ["typeLike", "enum", "enumMember"],
        }, {
            format: ["camelCase", "PascalCase"],
            selector: "function",
        },
    ],
    camelcase: "off",

    "@typescript-eslint/no-array-constructor": "error",
    "no-array-constructor": "off",

    "@typescript-eslint/no-array-delete": "error",

    "@typescript-eslint/no-base-to-string": "error",

    "@typescript-eslint/no-confusing-non-null-assertion": "error",

    "@typescript-eslint/no-confusing-void-expression": "off",

    "@typescript-eslint/no-dupe-class-members": "error",
    "no-dupe-class-members": "off",

    "@typescript-eslint/no-duplicate-enum-values": "error",

    "@typescript-eslint/no-duplicate-type-constituents": "error",

    "@typescript-eslint/no-dynamic-delete": "error",

    "@typescript-eslint/no-empty-function": "error",
    "no-empty-function": "off",

    "@typescript-eslint/no-empty-interface": "error",

    "@typescript-eslint/no-explicit-any": "error",

    "@typescript-eslint/no-extra-non-null-assertion": "error",

    "@typescript-eslint/no-extra-parens": [
        "error",
        "all",
        {
            enforceForArrowConditionals: false,
            ignoreJSX: "all",
            returnAssign: false,
        },
    ],
    "no-extra-parens": "off",

    "@typescript-eslint/no-extra-semi": "error",
    "no-extra-semi": "off",

    "@typescript-eslint/no-extraneous-class": "error",

    "@typescript-eslint/no-floating-promises": "error",

    "@typescript-eslint/no-for-in-array": "error",

    "@typescript-eslint/no-implied-eval": "error",
    "no-implied-eval": "off",

    "@typescript-eslint/no-import-type-side-effects": "error",

    "@typescript-eslint/no-inferrable-types": ["error", { ignoreParameters: true, ignoreProperties: true }],

    "@typescript-eslint/no-invalid-this": "error",
    "no-invalid-this": "off",

    "@typescript-eslint/no-invalid-void-type": "error",

    "@typescript-eslint/no-loop-func": "error",
    "no-loop-func": "off",

    "@typescript-eslint/no-loss-of-precision": "error",
    "no-loss-of-precision": "off",

    "@typescript-eslint/no-magic-numbers": "off",
    "no-magic-numbers": "off",

    "@typescript-eslint/no-meaningless-void-operator": "error",

    "@typescript-eslint/no-misused-new": "error",

    "@typescript-eslint/no-misused-promises": "error",

    "@typescript-eslint/no-mixed-enums": "error",

    "@typescript-eslint/no-namespace": "error",

    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",

    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",

    "@typescript-eslint/no-non-null-assertion": "off",

    "@typescript-eslint/no-redeclare": "error",
    "no-redeclare": "off",

    "@typescript-eslint/no-redundant-type-constituents": "error",

    "@typescript-eslint/no-require-imports": "error",

    "@typescript-eslint/no-restricted-imports": "error",
    "no-restricted-imports": "off",

    "@typescript-eslint/no-shadow": "error",
    "no-shadow": "off",

    "@typescript-eslint/no-this-alias": "off",

    "@typescript-eslint/no-throw-literal": "error",
    "no-throw-literal": "off",

    "@typescript-eslint/no-type-alias": "off",

    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

    "@typescript-eslint/no-unnecessary-condition": "error",

    "@typescript-eslint/no-unnecessary-qualifier": "error",

    "@typescript-eslint/no-unnecessary-type-arguments": "error",

    "@typescript-eslint/no-unnecessary-type-assertion": "error",

    "@typescript-eslint/no-unnecessary-type-constraint": "error",

    "@typescript-eslint/no-unsafe-argument": "error",

    "@typescript-eslint/no-unsafe-assignment": "error",

    "@typescript-eslint/no-unsafe-call": "error",

    "@typescript-eslint/no-unsafe-declaration-merging": "error",

    "@typescript-eslint/no-unsafe-enum-comparison": "error",

    "@typescript-eslint/no-unsafe-member-access": "error",

    "@typescript-eslint/no-unsafe-return": "error",

    "@typescript-eslint/no-unsafe-unary-minus": "error",

    "@typescript-eslint/no-unused-expressions": "error",
    "no-unused-expressions": "off",

    "@typescript-eslint/no-unused-vars": [
        "error", {
            args: "after-used",
            argsIgnorePattern: "^_",
            caughtErrors: "none",
            caughtErrorsIgnorePattern: "^_",
            destructuredArrayIgnorePattern: "^_",
            ignoreRestSiblings: true,
            vars: "all",
            varsIgnorePattern: "^_",
        },
    ],
    "no-unused-vars": "off",

    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "no-use-before-define": "off",

    "@typescript-eslint/no-useless-constructor": "error",
    "no-useless-constructor": "off",

    "@typescript-eslint/no-useless-empty-export": "error",

    "@typescript-eslint/no-useless-template-literals": "error",

    "@typescript-eslint/no-var-requires": "error",

    "@typescript-eslint/non-nullable-type-assertion-style": "error",

    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "object-curly-spacing": "off",

    "@typescript-eslint/only-throw-error": "error",

    "@typescript-eslint/padding-line-between-statements": [
        "error",
        {
            blankLine: "always",
            next: "*",
            prev: "directive",
        },
        {
            blankLine: "any",
            next: "directive",
            prev: "directive",
        },
        {
            blankLine: "always",
            next: "*",
            prev: "import",
        },
        {
            blankLine: "any",
            next: "import",
            prev: "import",
        },
        {
            blankLine: "always",
            next: ["class", "if", "while", "switch", "try"],
            prev: "*",
        },
        {
            blankLine: "always",
            next: "*",
            prev: ["class", "if", "while", "switch", "try"],
        },
        {
            blankLine: "always",
            next: ["interface", "type"],
            prev: "*",
        },
    ],
    "padding-line-between-statements": "off",

    "@typescript-eslint/parameter-properties": "off",

    "@typescript-eslint/prefer-as-const": "error",

    "@typescript-eslint/prefer-destructuring": "error",
    "prefer-destructuring": "off",

    "@typescript-eslint/prefer-enum-initializers": "error",

    "@typescript-eslint/prefer-find": "error",

    "@typescript-eslint/prefer-for-of": "error",

    "@typescript-eslint/prefer-function-type": "error",

    "@typescript-eslint/prefer-includes": "error",

    "@typescript-eslint/prefer-literal-enum-member": "error",

    "@typescript-eslint/prefer-namespace-keyword": "error",

    "@typescript-eslint/prefer-nullish-coalescing": "error",

    "@typescript-eslint/prefer-optional-chain": "error",

    "@typescript-eslint/prefer-promise-reject-errors": "error",
    "prefer-promise-reject-errors": "off",

    "@typescript-eslint/prefer-readonly": "error",

    "@typescript-eslint/prefer-readonly-parameter-types": "off",

    "@typescript-eslint/prefer-reduce-type-parameter": "error",

    "@typescript-eslint/prefer-regexp-exec": "error",

    "@typescript-eslint/prefer-return-this-type": "error",

    "@typescript-eslint/prefer-string-starts-ends-with": "error",

    "@typescript-eslint/prefer-ts-expect-error": "error",

    "@typescript-eslint/promise-function-async": "error",

    "@typescript-eslint/quotes": "error",
    quotes: "off",

    "@typescript-eslint/require-array-sort-compare": "error",

    "@typescript-eslint/require-await": "error",
    "require-await": "off",

    "@typescript-eslint/restrict-plus-operands": "error",

    "@typescript-eslint/restrict-template-expressions": "error",

    "@typescript-eslint/return-await": "error",

    "@typescript-eslint/semi": "error",
    semi: "off",

    "@typescript-eslint/sort-type-constituents": "error",

    "@typescript-eslint/space-before-blocks": "error",
    "space-before-blocks": "off",

    "@typescript-eslint/space-before-function-paren": [
        "error", {
            anonymous: "always",
            asyncArrow: "always",
            named: "never",
        },
    ],
    "space-before-function-paren": "off",

    "@typescript-eslint/space-infix-ops": "error",
    "space-infix-ops": "off",

    "@typescript-eslint/strict-boolean-expressions": "error",

    "@typescript-eslint/switch-exhaustiveness-check": "error",

    "@typescript-eslint/triple-slash-reference": "error",

    "@typescript-eslint/type-annotation-spacing": "error",

    "@typescript-eslint/typedef": "error",

    "@typescript-eslint/unbound-method": "error",

    // eslint-disable-next-line id-length
    "@typescript-eslint/unified-signatures": ["error", { ignoreDifferentlyNamedParameters: true }],

    "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
} satisfies Rules;
