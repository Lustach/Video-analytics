/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    // "plugin:vue/vue3-essential",
  ],
  rules: {
    "max-len": ["error", { code: 150 }],
    "no-prototype-builtins": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",
    "vue/max-attributes-per-line": "off",
    "arrow-parens": ["error", "always"],
    "no-irregular-whitespace": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "vue/no-multiple-template-root": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
