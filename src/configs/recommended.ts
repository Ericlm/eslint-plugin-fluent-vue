import type { Linter } from 'eslint'
import vueParser from 'vue-eslint-parser'
import noFoo from '../rules/no-foo.js'

export const recommended: Linter.Config = {
  name: 'fluent-vue/recommended',
  files: ['**/*.vue'],
  plugins: {
    'fluent-vue': {
      rules: {
        'no-foo': noFoo,
      },
    },
  },
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  rules: {
    'fluent-vue/no-foo': 'error',
  },
}
