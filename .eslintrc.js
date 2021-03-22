module.exports = {
  env: {
    node: true,
    mocha: true,
    es6: true,
    browser: true,
    "jest/globals": true
  },
  ignorePatterns: ['dist', 'node_modules', 'polyfill', 'querySelectorShadowDom.js'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
  },
  plugins: ['prettier', 'jest'],
  rules: {
    'no-console': 'off',
  },
};
