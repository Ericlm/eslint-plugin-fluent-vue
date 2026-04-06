import type { Rule } from 'eslint'
import noFoo from './rules/no-foo.js'

export const rules: Record<string, Rule.RuleModule> = {
  'no-foo': noFoo,
}
