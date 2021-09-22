module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-vars': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'react/prefer-stateless-function': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
};
