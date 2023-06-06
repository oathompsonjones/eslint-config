const ALWAYS = "always";
const AS_NEEDED = "as-needed";
const CONSISTENT = "consistent";
const CONSISTENT_AS_NEEDED = "consistent-as-needed";
const ERROR = "error";
const NEVER = "never";
const OFF = "off";
const WARN = "warn";

module.exports = {
    ERROR_LEVEL: {
        ALWAYS,
        AS_NEEDED,
        CONSISTENT,
        CONSISTENT_AS_NEEDED,
        ERROR,
        NEVER,
        OFF,
        WARN
    },
    PLUGINS: {
        ESLINT: "eslint:all",
        NEXT: "plugin:@next/next/recommended",
        REACT: "plugin:react/all",
        TYPESCRIPT: "plugin:@typescript-eslint/all"
    }
};
