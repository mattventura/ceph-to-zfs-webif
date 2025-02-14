// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylisticJs from '@stylistic/eslint-plugin-js';
import namedImportSpacing from 'eslint-plugin-named-import-spacing';

export default [
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                // Needed for strictTypeChecked to work
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            }
        }
    },
    {
        languageOptions: {
            parserOptions: {
                // Needed for strictTypeChecked to work
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            }
        },
        plugins: {
            '@stylistic/js': stylisticJs,
            'named-import-spacing': namedImportSpacing,
        },
        ignores: ['**/build/', '**/dist/', '**/*.d.ts'],
        rules: {
            "@stylistic/js/brace-style": ["error", "stroustrup"],
            "@stylistic/js/comma-dangle": ["error", {
                functions: "never",
                arrays: "always-multiline",
                objects: "always-multiline",
                imports: "never",
                exports: "never",
            }],
            "@stylistic/js/comma-spacing": "error",
            "@stylistic/js/eol-last": "error",
            "@stylistic/js/indent": ["error", 4, {
                SwitchCase: 1,
            }],
            "@stylistic/js/keyword-spacing": "error",
            "@stylistic/js/no-mixed-spaces-and-tabs": "error",
            "@stylistic/js/no-tabs": "error",
            "@stylistic/js/no-trailing-spaces": "error",
            "@stylistic/js/semi": "error",
            "@stylistic/js/space-infix-ops": "error",
            "@typescript-eslint/no-empty-object-type": "error",
            "@typescript-eslint/no-this-alias": [
                "error",
                {
                    allowedNames: ["outer"],
                },
            ],
            "@typescript-eslint/no-unused-expressions": "warn",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    args: "none",
                    caughtErrors: "none",
                },
            ],
            "@typescript-eslint/no-misused-promises": [
                "error",
                {
                    checksVoidReturn: false,
                }
            ],
            "@typescript-eslint/no-confusing-void-expression": [
                "off",
                {
                    ignoreArrowShorthand: true,
                }
            ],
            "@typescript-eslint/restrict-template-expressions": [
                "error",
                {
                    allowNumber: true
                },
            ],
            "accessor-pairs": [
                "error",
                {
                    getWithoutSet: false,
                    setWithoutGet: true,
                },
            ],
            "block-scoped-var": "error",
            "camelcase": "error",
            "eqeqeq": "error",
            "getter-return": "error",
            "named-import-spacing/named-import-spacing": ["error", "never"],
            "no-unused-vars": "off",
            "no-var": "error",
            "prefer-const": "error",
            "use-isnan": "error",
        },
    },
];
