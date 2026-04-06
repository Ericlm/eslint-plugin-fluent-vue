import type { Linter } from 'eslint'
import vueParser from 'vue-eslint-parser'

export const recommended: Linter.Config = {
  name: 'fluent-vue/recommended',
  files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
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
