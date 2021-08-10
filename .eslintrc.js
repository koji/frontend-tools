module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 'off',
    // 1: Turn off rules that are no longer necessary in React 17 and in Next.js
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // 2: We do not need to use prop types with TypeScript
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    // // suppress errors for missing 'import React' in files
    // 'react/react-in-jsx-scope': 'off',
    // // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // should add ".ts" if typescript project
  },
};
