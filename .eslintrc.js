"use strict"

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    amd: true,
    es6: true,
    jquery: true,
    node: true,
    mocha: true,
    jest: true,
    worker: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: { jsx: true },
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  extends: ["eslint:recommended", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        trailingComma: "none",
        semi: false
      }
    ],
    "no-console": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2
  }
}
