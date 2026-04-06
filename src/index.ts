import noFoo from './rules/no-foo.js'
import { configs } from './configs/index.js'

export const rules = {
  'no-foo': noFoo,
}

export const plugin = {
  meta: {
    name: 'eslint-plugin-fluent-vue',
    version: '0.0.1',
  },
  rules,
}

export default {
  rules,
  configs,
}
