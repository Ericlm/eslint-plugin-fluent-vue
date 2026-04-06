# eslint-plugin-fluent-vue

ESLint plugin for Fluent-Vue integration.

## Installation

```bash
pnpm add -D eslint-plugin-fluent-vue
```

## Usage

### Configuration

Add `fluent-vue` to the plugins section of your `.eslintrc` configuration file:

```json
{
  "plugins": ["fluent-vue"],
  "rules": {
    "fluent-vue/no-foo": "error"
  }
}
```

### Rules

| Rule     | Description                                                                 |
| -------- | --------------------------------------------------------------------------- |
| `no-foo` | Disallow variable declarations named "foo" in Vue SFC script setup sections |

## Development

```bash
# Install dependencies
pnpm install

# Build
pnpm build

# Test
pnpm test

# Lint
pnpm lint
```

## License

MIT
