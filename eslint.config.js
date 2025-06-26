// https://github.com/antfu/eslint-config
import antfu from '@antfu/eslint-config'
import quibble from 'eslint-plugin-quibble'

export default antfu({
  plugins: {
    quibble,
  },
  typescript: true,
  vue: true,
  formatters: {
    html: true,
    markdown: 'prettier',
    jsonc: true,
  },
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'ignore',
      multiline: 'below',
    }],
    'capitalized-comments': 'error',
    'jsonc/sort-keys': 'error',
    'quibble/no-excessive-whitespace': ['error', { callees: ['classnames', 'clsx', 'ctl', 'cva', 'cx', 'cn'] }],
    'vue/v-bind-style': ['error', 'shorthand', {
      sameNameShorthand: 'always',
    }],
    'unicorn/consistent-function-scoping': 'off',
    'vue/padding-line-between-tags': ['error', [
      { blankLine: 'always', prev: '*', next: '*' },
    ]],
    'style/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
  },
  settings: {
    tailwindcss: {
      callees: ['classnames', 'clsx', 'ctl', 'cva', 'cx', 'cn'],
    },
  },
})
