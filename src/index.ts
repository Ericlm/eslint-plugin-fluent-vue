import type { Rule } from 'eslint'
import { ESLint } from 'eslint'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import noFoo from './rules/no-foo.js'
import { configs } from './configs/index.js'

const pkg = JSON.parse(
  readFileSync(join(dirname(fileURLToPath(import.meta.url)), '..', 'package.json'), 'utf-8'),
)

export const rules: Record<string, Rule.RuleModule> = {
  'no-foo': noFoo,
}

const plugin: ESLint.Plugin = {
  meta: {
    name: pkg.name,
    version: pkg.version,
    namespace: 'fluent-vue',
  },
  rules,
  configs,
}

export default plugin
