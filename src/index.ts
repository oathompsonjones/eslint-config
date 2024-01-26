/* eslint-disable @typescript-eslint/naming-convention */
import type { ESLint } from "eslint";
import type { FlatESLintConfig } from "eslint-define-config";
import globals from "globals";
import jsRules from "./JavaScript.js";
import nextPlugin from "@next/eslint-plugin-next";
import nextRules from "./Next.js";
import reactPlugin from "eslint-plugin-react";
import reactRules from "./React.js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsRules from "./TypeScript.js";

const ts = tsPlugin as unknown as ESLint.Plugin;
const react = reactPlugin as unknown as ESLint.Plugin;
const next = nextPlugin as unknown as ESLint.Plugin;

/**
 * Takes the path to your tsconfig.json file and returns a config for ESLint.
 * @param tsConfigJSON The path to your tsconfig.json file.
 * @returns Your ESLint config.
*/
export default function createConfig(tsConfigJSON?: string): FlatESLintConfig[] {
    // Folders to ignore.
    const ignores = ["build", "dist", "bin", "node_modules"].map((folder) => `**/${folder}/**`);

    // Used for React/NextJS.
    const parseJSX = { ecmaFeatures: { jsx: true } };
    const reactSettings = {
        next: { rootDir: "/src/app/" },
        react: { version: "detect" },
    };

    // Globals for each file type.
    const nodeGlobals = {
        ...globals.node,
        ...globals.es2021,
    };
    const reactGlobals = {
        ...nodeGlobals,
        ...globals.browser,
    };

    // Linter options.
    const linterOptions = { reportUnusedDisableDirectives: true };

    const defaultConfig = [
        { ignores },
        // Config for .js files.
        {
            files: ["**/*.js"],
            ignores,
            languageOptions: { globals: nodeGlobals },
            linterOptions,
            rules: jsRules,
        },
        // Config for .ts files.
        {
            files: ["**/*.ts"],
            ignores,
            languageOptions: {
                globals: nodeGlobals,
                parser: tsParser,
            },
            linterOptions,
            plugins: { "@typescript-eslint": ts },
            rules: {
                ...jsRules,
                ...tsRules,
            },
        },
        // Config for .jsx files.
        {
            files: ["**/*.jsx"],
            ignores,
            languageOptions: {
                globals: reactGlobals,
                parserOptions: parseJSX,
            },
            linterOptions,
            plugins: {
                "@next/next": next,
                react,
            },
            rules: {
                ...jsRules,
                ...reactRules,
                ...nextRules,
            },
            settings: reactSettings,
        },
        // Config for .tsx files.
        {
            files: ["**/*.tsx"],
            ignores,
            languageOptions: {
                globals: reactGlobals,
                parser: tsParser,
                parserOptions: parseJSX,
            },
            linterOptions,
            plugins: {
                "@next/next": next,
                "@typescript-eslint": ts,
                react,
            },
            rules: {
                ...jsRules,
                ...tsRules,
                ...reactRules,
                ...nextRules,
            },
            settings: reactSettings,
        },
    ];

    return tsConfigJSON === undefined
        ? defaultConfig
        : [
            ...defaultConfig,
            // Provide ESLint with the path to your tsconfig.json file.
            { languageOptions: { parserOptions: { project: tsConfigJSON } } },
        ];
}
