module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  root: true,
  ignorePatterns: [
    "__tests__",
    ".eslintrc.js",
    ".next/",
    "coverage",
    "dist",
    "jest.config.mjs",
    "next-env.d.ts",
    "next.config.js",
    "node_modules",
    "tsconfig.json",
    "utility",
    "volumes",
    "webpack.config.js",
    "babel.config.js",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
  ],
  plugins: [
    //
    "@typescript-eslint",
    "react",
    "security",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "none",
        caughtErrors: "none",
        varsIgnorePattern: "^React$",
      },
    ],
    "@typescript-eslint/no-var-requires": "off",
    "no-cond-assign": "off",
    "no-constant-condition": "off",
    "no-control-regex": "off",
    "no-extra-boolean-cast": "off",
    "no-fallthrough": "off",
    "no-prototype-builtins": "off",
    "react/jsx-no-target-blank": "off",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "security/detect-non-literal-fs-filename": "off",
    "security/detect-non-literal-regexp": "off",
    "react-hooks/exhaustive-deps": [
      "warn",
      { additionalHooks: "(useFetch|useLoadingCallback)" },
    ],
  },
};
