import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPlugin from 'eslint-plugin-eslint-plugin'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    ignores: ['dist'],
  },

  js.configs.recommended,
  tseslint.configs.recommended,
  eslintPlugin.configs.recommended,
])
