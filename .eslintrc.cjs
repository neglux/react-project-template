module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "react-app",
    "airbnb",
    "airbnb-typescript",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/react-in-jsx-scope": "off",
    quotes: "off",
    "@typescript-eslint/quotes": "off",
    "import/no-absolute-path": "off",
    "import/extensions": "off",
    "react/jsx-no-target-blank": "off",
    "react/jsx-one-expression-per-line": "off",
    "@typescript-eslint/comma-dangle": "off",
  },
};
