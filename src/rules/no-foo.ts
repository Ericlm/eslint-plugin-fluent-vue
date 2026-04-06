import type { Rule } from 'eslint'

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow variable declarations named "foo"',
      recommended: true,
    },
    messages: {
      noFoo: "Variable 'foo' is not allowed. Please use a descriptive name.",
    },
    schema: [],
  },
  create(context) {
    return {
      VariableDeclaration(node) {
        if (node.kind === 'const' || node.kind === 'let' || node.kind === 'var') {
          node.declarations.forEach((declaration) => {
            if (declaration.id.type === 'Identifier' && declaration.id.name === 'foo') {
              context.report({
                node,
                messageId: 'noFoo',
              })
            }
          })
        }
      },
    }
  },
}

export default rule
