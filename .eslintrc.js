const config = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'space-before-function-paren': 'off',
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    quotes: 0,
    indent: 0,
    semi: 0
  }
}

module.exports = config
