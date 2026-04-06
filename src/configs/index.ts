import type { Linter } from 'eslint'
import { recommended } from './recommended.js'

export const configs: {
  recommended: Linter.Config[]
} = {
  recommended,
}
