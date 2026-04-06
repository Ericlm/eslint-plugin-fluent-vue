import type { Linter } from 'eslint'
import vueParser from 'vue-eslint-parser'

const plugin = {
  meta: {
    name: 'eslint-plugin-fluent-vue',
    version: '0.0.1',
  },
}

export const recommended: Linter.Config[] = [
  {
    name: 'fluent-vue/recommended',
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: {
      'fluent-vue': plugin,
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
  },
]
