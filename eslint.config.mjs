import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      parserOptions: {
        project: true,
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    rules: {
      "@typescript-eslint/no-floating-promises": "error",
      "no-console": "off",
      "no-undef": "off",
      "import/no-unresolved": "off",
      "import/no-extraneous-dependencies": "off",
      "no-useless-escape": "off",
      "no-unused-expressions": ["off", { allowTernary: true }],
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    ignores: ["dist/**", "node_modules/**", "playwright.config.ts"],
  }
);
