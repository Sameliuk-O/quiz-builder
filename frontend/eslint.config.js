import * as js from '@eslint/js';
import * as globals from 'globals';
import tseslint from 'typescript-eslint';
import * as react from 'eslint-plugin-react';
import * as reactHooks from 'eslint-plugin-react-hooks';
import * as jsxA11y from 'eslint-plugin-jsx-a11y';
import * as importPlugin from 'eslint-plugin-import';
import * as simpleImportSort from 'eslint-plugin-simple-import-sort';
import * as prettier from 'eslint-plugin-prettier';

export default tseslint.config(
    { ignores: ['dist', 'node_modules'] },
    {
      files: ['**/*.{ts,tsx}'],
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
      languageOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
        globals: globals.browser,
      },
      plugins: {
        react,
        'react-hooks': reactHooks,
        'jsx-a11y': jsxA11y,
        import: importPlugin,
        'simple-import-sort': simpleImportSort,
        prettier,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        'prettier/prettier': [
          'error',
          {
            tabWidth: 2,
            useTabs: false,
            semi: true,
            singleQuote: true,
            trailingComma: 'all',
            printWidth: 100,
            bracketSpacing: true,
          },
        ],
        'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
        'import/extensions': [
          'error',
          'ignorePackages',
          { ts: 'never', tsx: 'never', js: 'never', jsx: 'never', json: 'never' },
        ],
        'object-curly-spacing': ['error', 'always'],
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
            'newlines-between': 'always',
            alphabetize: { order: 'asc', caseInsensitive: true },
          },
        ],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
      },
      settings: {
        react: { version: 'detect' },
        'import/resolver': {
          typescript: {},
        },
      },
    },
);
