module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'react', 'import', 'unused-imports'],
  rules: {
    // react-refresh
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // '@typescript-eslint
    '@typescript-eslint/consistent-type-imports': 'error',
    // react
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // import
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal', 'index', 'type', 'sibling', 'parent'],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'internal',
            pattern: '@src/**',
            position: 'before',
          },
        ],
      },
    ],
    // unused-imports
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.cjs', '.ts', '.tsx', '.json'],
      },
      typescript: {
        alwaysTryTypes: true,
        config: 'tsconfig.json',
      },
    },
    react: {
      version: 'detect',
    },
  },
};
