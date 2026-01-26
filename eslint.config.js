const js = require('@eslint/js');
const prettier = require('eslint-config-prettier');
module.exports = [
  js.configs.recommended,
  prettier,
  {
    files: ['**/*.js'],
    // Configure language options
    languageOptions: {
      sourceType: 'commonjs', // Explicitly specify CommonJS source type
    },

    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
      eqeqeq: 'error',
      'prefer-const': 'error',
    },
  },
];
