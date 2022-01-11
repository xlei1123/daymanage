module.exports = {
  extends: [
    require.resolve('@umijs/fabric/dist/eslint'),
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  plugins: ['import'],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    'prettier/prettier': 'error',
    // 'import/order': [
    //   'warn',
    //   {
    //     groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object', 'type'],
    //   },
    // ],
    'import/order': 'off',
    'no-console': process.env.UMI_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
  },
};
