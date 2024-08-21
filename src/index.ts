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
import tsdocPlugin from "eslint-plugin-tsdoc";
import tsdocRules from "./TSDoc.js";

const ts = tsPlugin as unknown as ESLint.Plugin;
const react = reactPlugin as unknown as ESLint.Plugin;
const next = nextPlugin as unknown as ESLint.Plugin;
const tsdoc = tsdocPlugin as unknown as ESLint.Plugin;

/**
 * Takes the path to your tsconfig.json file and returns a config for ESLint.
 * @param rules - Extra rules to add to your ESLint config.
 * @param useTypeScript - Whether or not to use TypeScript. Defaults to `true`.
 * @param tsConfig - The path to your tsconfig.json file if using TypeScript. Defaults
 * to `"tsconfig.json"` in the root of your project.
 * @param useNextJS - Whether or not to use NextJS. Defaults to `false`.
 * @param pagesDirectory - The path to your pages directory if using NextJS. Defaults to `"src/app"`.
 * @returns Your ESLint config.
*/
export default function createConfig(options: {
    rules?: FlatESLintConfig[];
} & ({
    useNextJS: true;
    pagesDirectory?: string;
} | {
    useNextJS?: false;
}) & ({
    useTypeScript: false;
} | {
    useTypeScript?: true;
    tsConfig?: string;
}) = {}): FlatESLintConfig[] {
    // Set default values.
    options.useTypeScript ??= true;
    options.useNextJS ??= false;

    // Folders to ignore.
    const ignores = ["build", "dist", "bin", "node_modules", ".next"].map((folder) => `**/${folder}/**`);

    // Used for React/NextJS.
    const parseJSX = { ecmaFeatures: { jsx: true } };
    const reactSettings = {
        ...options.useNextJS ? { next: { rootDir: "/src/app/" } } : {},
        react: { version: "detect" },
    };

    // Globals for each file type.
    const nodeGlobals = { ...globals.node, ...globals.es2021 };
    const reactGlobals = { ...nodeGlobals, ...globals.browser };
    const tsGlobals = { ...nodeGlobals, NodeJS: true };
    const reactTsGlobals = { ...reactGlobals, NodeJS: true };

    // Linter options.
    const linterOptions = { reportUnusedDisableDirectives: true };

    // Config for .js files.
    const jsConfig = {
        files: ["**/*.js"],
        ignores,
        languageOptions: { globals: nodeGlobals },
        linterOptions,
        rules: jsRules,
    };

    // Config for .jsx files.
    const jsxConfig = {
        files: ["**/*.jsx"],
        ignores,
        languageOptions: {
            globals: reactGlobals,
            parserOptions: parseJSX,
        },
        linterOptions,
        plugins: {
            ...options.useNextJS ? { "@next/next": next } : {},
            react,
        },
        rules: {
            ...jsRules,
            ...reactRules,
            ...options.useNextJS ? nextRules(options.pagesDirectory ?? "src/app") : {},
        },
        settings: reactSettings,
    };

    // Config for .ts files.
    const tsConfig = options.useTypeScript
        ? {
            files: ["**/*.ts"],
            ignores,
            languageOptions: {
                globals: tsGlobals,
                parser: tsParser,
                parserOptions: { project: options.tsConfig ?? "tsconfig.json" },
            },
            linterOptions,
            plugins: {
                "@typescript-eslint": ts,
                tsdoc,
            },
            rules: {
                ...jsRules,
                ...tsRules,
                ...tsdocRules,
            },
        }
        : {};

    // Config for .tsx files.
    const tsxConfig = options.useTypeScript
        ? {
            files: ["**/*.tsx"],
            ignores,
            languageOptions: {
                globals: reactTsGlobals,
                parser: tsParser,
                parserOptions: { ...parseJSX, project: options.tsConfig ?? "tsconfig.json" },
            },
            linterOptions,
            plugins: {
                ...options.useNextJS ? { "@next/next": next } : {},
                "@typescript-eslint": ts,
                react,
                tsdoc,
            },
            rules: {
                ...jsRules,
                ...tsRules,
                ...tsdocRules,
                ...reactRules,
                ...options.useNextJS ? nextRules(options.pagesDirectory ?? "src/app") : {},
            },
            settings: reactSettings,
        }
        : {};

    // Default config for ESLint.
    return [
        { ignores },
        jsConfig,
        tsConfig,
        jsxConfig,
        tsxConfig,
        ...options.rules ?? [],
    ];
}
