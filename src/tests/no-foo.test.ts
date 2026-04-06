import { describe, it } from 'vitest'
import { RuleTester } from 'eslint'
import rule from '../rules/no-foo'
import fs from 'fs'
import path from 'path'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

const validCode = fs.readFileSync(path.join(__dirname, 'fixtures', 'valid.vue'), 'utf-8')

const invalidCode = fs.readFileSync(path.join(__dirname, 'fixtures', 'invalid.vue'), 'utf-8')

const ruleTester = new RuleTester({
  languageOptions: {
    parser: vueParser,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
})

const tsRuleTester = new RuleTester({
  languageOptions: {
    parser: tsParser,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
})

describe('no-foo rule', () => {
  it('runs rule tests for Vue files', () => {
    ruleTester.run('no-foo', rule, {
      valid: [
        {
          filename: 'test.vue',
          code: validCode,
        },
        {
          code: `
<script setup>
const bar = 'ok'
const baz = 'also ok'
</script>
          `,
        },
      ],
      invalid: [
        {
          filename: 'test.vue',
          code: invalidCode,
          errors: [
            {
              messageId: 'noFoo',
            },
          ],
        },
        {
          code: `
<script setup>
const foo = 'bad'
</script>
          `,
          errors: [
            {
              messageId: 'noFoo',
            },
          ],
        },
      ],
    })
  })

  it('runs rule tests for TypeScript files', () => {
    tsRuleTester.run('no-foo', rule, {
      valid: [
        {
          code: `
const bar: string = 'ok';
const baz: number = 42;
          `,
        },
      ],
      invalid: [
        {
          code: `
const foo: string = 'bad';
          `,
          errors: [
            {
              messageId: 'noFoo',
            },
          ],
        },
      ],
    })
  })
})
