import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'postcss.config.mjs', 'vite.config.js'],
    plugins: ['react-hooks', 'react-refresh', 'react', '@typescript-eslint', 'jsx-a11y'],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ['./tsconfig.json', './tsconfig.node.json'],
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-unused-vars': 'off',
      'react/react-in-jsx-scope': ['off'],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/function-component-definition': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/heading-has-content': 'error',
      'jsx-a11y/label-has-associated-control': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
  }
);
