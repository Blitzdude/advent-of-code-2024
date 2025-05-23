module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'standard'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 13,
      sourceType: 'module'
    },
    plugins: [
      '@typescript-eslint'
    ],
    rules: {
      semi: 'always'
    }
  }