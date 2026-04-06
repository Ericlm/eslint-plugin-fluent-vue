import { describe, it } from "vitest";
import { RuleTester } from "eslint";
import rule from "../rules/no-foo";
import fs from "fs";
import path from "path";
import vueParser from "vue-eslint-parser";

const validCode = fs.readFileSync(path.join(__dirname, "fixtures", "valid.vue"), "utf-8");

const invalidCode = fs.readFileSync(path.join(__dirname, "fixtures", "invalid.vue"), "utf-8");

const ruleTester = new RuleTester({
  languageOptions: {
    parser: vueParser,
    ecmaVersion: 2020,
    sourceType: "module",
  },
});

describe("no-foo rule", () => {
  it("runs rule tests", () => {
    ruleTester.run("no-foo", rule, {
      valid: [
        {
          filename: "test.vue",
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
          filename: "test.vue",
          code: invalidCode,
          errors: [
            {
              message: "Variable 'foo' is not allowed. Please use a descriptive name.",
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
              message: "Variable 'foo' is not allowed. Please use a descriptive name.",
            },
          ],
        },
      ],
    });
  });
});
