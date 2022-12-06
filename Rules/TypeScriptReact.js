const { ERROR } = require("./Constants");

const tsRules = Object.fromEntries(
    Object.entries({
        "naming-convention": [
            ERROR,
            { format: ["camelCase"], leadingUnderscore: "allow", selector: "default", trailingUnderscore: "allow" },
            { format: ["camelCase", "UPPER_CASE", "PascalCase"], leadingUnderscore: "allow", selector: "variableLike", trailingUnderscore: "allow" },
            { format: ["PascalCase"], selector: "typeLike" },
            { format: ["camelCase", "PascalCase"], selector: "function" }
        ]
    }).map(([key, value]) => [`@typescript-eslint/${key}`, value])
);

const reactRules = Object.fromEntries(
    Object.entries({ "jsx-filename-extension": [ERROR, { extensions: [".jsx", ".tsx"] }] })
        .map(([key, value]) => [`react/${key}`, value])
);

module.exports = { ...tsRules, ...reactRules };
