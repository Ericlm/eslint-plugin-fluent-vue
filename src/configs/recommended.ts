import type { Linter } from 'eslint'
import vueParser from 'vue-eslint-parser'
import { rules } from '../rules.js'

export const recommended: Linter.Config = {
  name: 'fluent-vue/recommended',
  files: ['**/*.vue'],
  plugins: {
    'fluent-vue': {
      rules,
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
