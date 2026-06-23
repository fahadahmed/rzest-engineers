// typescript-eslint's `tseslint.config` helper is flagged deprecated in favor
// of ESLint's own `defineConfig`, but the latter's stricter plugin typing
// conflicts with eslint-plugin-react-hooks' own type declarations (an
// ecosystem mismatch, not a real bug) — keeping tseslint.config for now.
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import astro from "eslint-plugin-astro";
import storybook from "eslint-plugin-storybook";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default tseslint.config(
  {
    ignores: [
      "dist/**",
      ".astro/**",
      "coverage/**",
      "node_modules/**",
      "functions/**",
      "storybook-static/**",
    ],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "19" },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
  ...astro.configs["flat/recommended"],
  ...storybook.configs["flat/recommended"],
  eslintConfigPrettier,
);
