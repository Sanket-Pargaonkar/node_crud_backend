const js = require('@eslint/js');
const prettier = require('eslint-config-prettier');
const globals = require('globals');
module.exports = [
  js.configs.recommended,
  prettier,
  {
    files: ['**/*.js'],
    // Configure language options
    languageOptions: {
      sourceType: 'commonjs', // Explicitly specify CommonJS source type
      globals: {
        ...globals.node,
      },
    },

    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
      eqeqeq: 'error',
      'prefer-const': 'error',
    },
  },
];
