const { ERROR_LEVEL: { ERROR } } = require("../Constants");

const nextRules = Object.fromEntries(Object.entries({
    "google-font-display": ERROR,
    "google-font-preconnect": ERROR,
    "inline-script-id": ERROR,
    "next-script-for-ga": ERROR,
    "no-assign-module-variable": ERROR,
    "no-before-interactive-script-outside-document": ERROR,
    "no-css-tags": ERROR,
    "no-document-import-in-page": ERROR,
    "no-duplicate-head": ERROR,
    "no-head-element": ERROR,
    "no-head-import-in-document": ERROR,
    "no-html-link-for-pages": ERROR,
    "no-img-element": ERROR,
    "no-page-custom-font": ERROR,
    "no-script-component-in-head": ERROR,
    "no-styled-jsx-in-document": ERROR,
    "no-sync-scripts": ERROR,
    "no-title-in-document-head": ERROR,
    "no-typos": ERROR,
    "no-unwanted-polyfillio": ERROR
}).map(([key, value]) => [`@next/next/${key}`, value]));

module.exports = nextRules;
