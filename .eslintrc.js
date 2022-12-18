module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['next/core-web-vitals', 'plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
  },

  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@/components', './components'],
          ['@/pages', './pages'],
          ['@/data', './data'],
          ['@/styles', './styles'],
          ['@/utils', './utils'],
          ['@/UI', './components/UI'],
          ['@/hooks', './hooks'],
          ['@/mock', './mock'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  globals: {
    React: 'writable',
  },
};
