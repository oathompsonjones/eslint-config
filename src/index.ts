/* eslint-disable @typescript-eslint/naming-convention */
import type { ESLint } from "eslint";
import type { FlatESLintConfig } from "eslint-define-config";
import globals from "globals";
import jsRules from "./JavaScript.js";
import jsdocPlugin from "eslint-plugin-jsdoc";
import jsdocRules from "./JSDoc.js";
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
const jsdoc = jsdocPlugin as unknown as ESLint.Plugin;

type CreateConfigOptions = {
    configs?: FlatESLintConfig[];
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
});

/**
 * Takes the path to your tsconfig.json file and returns a config for ESLint.
 * @param options - The options for your ESLint config.
 * @param options.configs - Extra rules to add to your ESLint config.
 * @param options.useTypeScript - Whether or not to use TypeScript. Defaults to `true`.
 * @param options.tsConfig - The path to your tsconfig.json file if using TypeScript. Defaults
 * to `"tsconfig.json"` in the root of your project.
 * @param options.useNextJS - Whether or not to use NextJS. Defaults to `false`.
 * @param options.pagesDirectory - The path to your pages directory if using NextJS. Defaults to `"src/app"`.
 * @returns Your ESLint config.
 */
export default function createConfig(options: CreateConfigOptions = {}): FlatESLintConfig[] {
    // Set default values.
    options.useTypeScript ??= true;
    options.useNextJS ??= false;

    // Folders to ignore.
    const ignores = ["build", "dist", "bin", "node_modules", ".next", "next-env.d.ts"].map((folder) => `**/${folder}/**`);

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
        plugins: { jsdoc },
        rules: {
            ...jsRules,
            ...jsdocRules,
        },
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
            jsdoc,
            react,
        },
        rules: {
            ...jsRules,
            ...jsdocRules,
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
                jsdoc,
            },
            rules: {
                ...jsRules,
                ...jsdocRules,
                ...tsRules,
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
                jsdoc,
                react,
            },
            rules: {
                ...jsRules,
                ...jsdocRules,
                ...tsRules,
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
        ...options.configs ?? [],
    ];
}
