/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.slate,
      red: colors.red,
      blue: colors.blue,
      secondary: '#5a698f',
      accent: '#FC4747',
      green: '#5cdb5c',
      black: {
        100: '#d0d2d5',
        200: '#a2a5ac',
        300: '#737782',
        400: '#454a59',
        500: '#161d2f',
        600: '#121726',
        700: '#0d111c',
        800: '#090c13',
        900: '#040609',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-fluid-type')],
};
