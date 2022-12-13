const { ERROR } = require("./Constants");

const reactRules = Object.fromEntries(
    Object.entries({ "jsx-filename-extension": [ERROR, { extensions: [".jsx", ".tsx"] }] })
        .map(([key, value]) => [`react/${key}`, value])
);

module.exports = { ...reactRules };
