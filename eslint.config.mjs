import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";

export default {
  parser: typescriptParser,
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  plugins: {
    "@typescript-eslint": typescriptPlugin,
    import: importPlugin,
  },
  rules: {
    "no-console": "off",
    "no-undef": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    // 'import/extensions': ['error', 'never'],
    "no-useless-escape": "off",
    "no-unused-expressions": ["off", { allowTernary: true }],
  },
};
