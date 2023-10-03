module.exports = {
  root: true,
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['prettier', 'react', 'import', '@typescript-eslint', 'sort-exports', 'tailwindcss'],
  parser: '@typescript-eslint/parser',
  settings: {
    react: { version: 'detect' },
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': {
      typescript: { alwaysTryTypes: true, project: './jsconfig.json' },
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  env: { node: true, browser: true, jest: true, es6: true },
  rules: {
    // NOTE: This is where you can Override default settings coming from the plugins!

    // #########################
    // Rule Set 1: generic rules
    // #########################
    'no-debugger': 'warn',
    'no-unused-vars': 'off',
    'prefer-template': 'error',
    'arrow-body-style': 'error',
    'prefer-arrow-callback': 'off',
    'no-constant-condition': 'off',

    // #######################
    // Rule Set 2: react rules
    // #######################
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-uses-react': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // 'react/jsx-filename-extension': 'error', // Yells at you if you add(?) an extension.
    // 'react/jsx-uses-vars': 'error', // DO NOT USE if no-unused-vars is marked off!

    // ############################
    // Rule Set 3: typescript rules
    // ############################
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: 'React' }],

    // ########################
    // Rule Set 4: import rules
    // ########################
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/newline-after-import': 'error',
    'import/first': 'error',
    'import/exports-last': 'error',
    'import/extensions': ['error', 'never'],
    'import/order': [
      'error',
      {
        pathGroups: [
          { pattern: 'react', group: 'builtin' },
          { pattern: '@*/**', group: 'internal' },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'never',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    // ##########################
    // Rule Set 5: prettier rules
    // ##########################
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        jsxSingleQuote: true,
        jsxBracketSameLine: false,
        bracketSpacing: true,
        arrowParens: 'always',
        parser: 'typescript',
        endOfLine: 'auto',
        printWidth: 120,
        proseWrap: 'preserve',
        htmlWhitespaceSensitivity: 'css',
        embeddedLanguageFormatting: 'off',
        quoteProps: 'as-needed',
      },
      { parser: 'typescript' },
    ],

    // ##############################
    // Rule Set 6: sort-imports rules
    // ##############################
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
        allowSeparatedGroups: false,
      },
    ],

    // ##############################
    // Rule Set 7: sort-exports rules
    // ##############################
    'sort-exports/sort-exports': ['error', { sortDir: 'asc' }],

    // #############################
    // Rule Set 9: tailwindcss rules
    // #############################
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/enforces-negative-arbitrary-values': 'error',
    'tailwindcss/enforces-shorthand': 'error',
    'tailwindcss/no-arbitrary-value': 'off', // <-- already off by default! prohibits using w-[5px]
    'tailwindcss/no-custom-classname': [
      'warn',
      {
        // only allow classnames from Tailwind CSS and the values from the whitelist option, so put everything you created inside this white list!
        whitelist: [
          'btn-love',
          'border-0.5',
          'border-1',
          'border-1.5',
          'border-b-1.5',
          'h-13',
          'h-15',
          'h-18',
          'h-md',
          'h-3xl',
          'w-15',
          'w-30',
          'w-34',
          'w-5xl',
          'min-h-20',
          'min-h-40',
          'min-w-28',
          'saturate-70',
          'translate-x-half',
          'translate-y-half',
          'font-tahoma',
          'animate-appear',
          'shadow-mini',
          'shadow-btn-love-active',
          'bg-redLight',
          'bg-myRed',
          'border-myRed',
          'bg-gradient-radial-bottom',
          'font-MyFont-bold',
          'font-MyFont',
          'scale-80',
        ],
      },
    ],
    'tailwindcss/no-contradicting-classname': 'error', // e.g. avoid p-2 p-3, different Tailwind CSS classnames (pt-2 & pt-3) but targeting the same property several times for the same variant.
  },
};
