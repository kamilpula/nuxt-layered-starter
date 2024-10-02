// https://github.com/antfu/eslint-config
import antfu from '@antfu/eslint-config'
import twEslint from 'eslint-plugin-tailwindcss'
import quibble from 'eslint-plugin-quibble'

export default antfu({
  plugins: {
    twEslint,
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
    'twEslint/classnames-order': 'error',
    'twEslint/enforces-shorthand': 'error',
    'twEslint/no-contradicting-classname': 'error',
    'twEslint/no-unnecessary-arbitrary-value': 'error',
    'capitalized-comments': 'error',
    'jsonc/sort-keys': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    'quibble/no-excessive-whitespace': 'error',
    'vue/v-bind-style': ['error', 'shorthand', {
      sameNameShorthand: 'always',
    }],
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
      callees: ['classnames', 'clsx', 'ctl', 'classMerge', 'cva', 'cx'],
    },
  },
})
