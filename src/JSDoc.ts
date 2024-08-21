/* eslint-disable @typescript-eslint/naming-convention */
import type { RuleOptions as JSDocRules } from "@eslint-types/jsdoc/types";
import type { RuleConfig } from "eslint-define-config";

type MissingRules =
    | "jsdoc/check-template-names"
    | "jsdoc/convert-to-jsdoc-comments"
    | "jsdoc/lines-before-block"
    | "jsdoc/require-template";

type Rules =
    // Rules missing from @eslint-types/jsdoc/types
    & { [_ in MissingRules]: RuleConfig; }
    // JSDoc rules
    & { [Key in keyof JSDocRules]: RuleConfig<JSDocRules[Key]>; };

export default {
    "jsdoc/check-access": "error",
    "jsdoc/check-alignment": "error",
    "jsdoc/check-examples": "off",
    "jsdoc/check-indentation": "error",
    "jsdoc/check-line-alignment": "error",
    "jsdoc/check-param-names": "error",
    "jsdoc/check-property-names": "error",
    "jsdoc/check-syntax": "error",
    "jsdoc/check-tag-names": "error",
    "jsdoc/check-template-names": "error",
    "jsdoc/check-types": "error",
    "jsdoc/check-values": "error",
    "jsdoc/convert-to-jsdoc-comments": ["error", { enforceJsdocLineStyle: "single" }],
    "jsdoc/empty-tags": "error",
    "jsdoc/implements-on-classes": "error",
    "jsdoc/imports-as-dependencies": "error",
    "jsdoc/informative-docs": "error",
    "jsdoc/lines-before-block": "error",
    "jsdoc/match-description": "off",
    "jsdoc/match-name": "off",
    "jsdoc/multiline-blocks": "error",
    "jsdoc/no-bad-blocks": "error",
    "jsdoc/no-blank-block-descriptions": "error",
    "jsdoc/no-blank-blocks": "error",
    "jsdoc/no-defaults": "error",
    "jsdoc/no-missing-syntax": "off",
    "jsdoc/no-multi-asterisks": "error",
    "jsdoc/no-restricted-syntax": "off",
    "jsdoc/no-types": "error",
    "jsdoc/no-undefined-types": "error",
    "jsdoc/require-asterisk-prefix": "error",
    "jsdoc/require-description": "error",
    "jsdoc/require-description-complete-sentence": "error",
    "jsdoc/require-example": "off",
    "jsdoc/require-file-overview": "off",
    "jsdoc/require-hyphen-before-param-description": "error",
    "jsdoc/require-jsdoc": "error",
    "jsdoc/require-param": "error",
    "jsdoc/require-param-description": "error",
    "jsdoc/require-param-name": "error",
    "jsdoc/require-param-type": "off",
    "jsdoc/require-property": "error",
    "jsdoc/require-property-description": "error",
    "jsdoc/require-property-name": "error",
    "jsdoc/require-property-type": "off",
    "jsdoc/require-returns": "error",
    "jsdoc/require-returns-check": "error",
    "jsdoc/require-returns-description": "error",
    "jsdoc/require-returns-type": "off",
    "jsdoc/require-template": "error",
    "jsdoc/require-throws": "error",
    "jsdoc/require-yields": "error",
    "jsdoc/require-yields-check": "error",
    "jsdoc/sort-tags": "error",
    "jsdoc/tag-lines": "error",
    "jsdoc/text-escaping": "off",
    "jsdoc/valid-types": "error",
} satisfies Rules;
