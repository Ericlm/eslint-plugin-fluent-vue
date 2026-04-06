import { describe, it } from 'vitest'
import { RuleTester } from 'eslint'
import rule from '../src/rules/no-foo'
import fs from 'fs'
import path from 'path'

const validCode = fs.readFileSync(
  path.join(__dirname, 'fixtures', 'valid.vue'),
  'utf-8'
)

const invalidCode = fs.readFileSync(
  path.join(__dirname, 'fixtures', 'invalid.vue'),
  'utf-8'
)

const ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  }
})

describe('no-foo rule', () => {
  it('runs rule tests', () => {
    ruleTester.run('no-foo', rule, {
      valid: [
        {
          filename: 'test.vue',
          code: validCode
        },
        {
          code: `
<script setup>
const bar = 'ok'
const baz = 'also ok'
</script>
          `
        }
      ],
      invalid: [
        {
          filename: 'test.vue',
          code: invalidCode,
          errors: [
            {
              message: "Variable 'foo' is not allowed. Please use a descriptive name."
            }
          ]
        },
        {
          code: `
<script setup>
const foo = 'bad'
</script>
          `,
          errors: [
            {
              message: "Variable 'foo' is not allowed. Please use a descriptive name."
            }
          ]
        }
      ]
    })
  })
})
