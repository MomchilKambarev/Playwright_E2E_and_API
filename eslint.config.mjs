import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      import: importPlugin,
    },
  },
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-console": "off",
      "no-undef": "off",
      "no-useless-escape": "off",
      "no-unused-expressions": ["off", { allowTernary: true }],
      "@typescript-eslint/no-floating-promises": "error",
      "import/no-unresolved": "off",
      "import/no-extraneous-dependencies": "off",
    },
  },
  prettierConfig,
];
