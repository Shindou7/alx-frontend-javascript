module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "airbnb-base"
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    // Add your ESLint rules here
  }
};

