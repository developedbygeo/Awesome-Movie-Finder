/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      transitionDuration: {
        0: '0ms',
        250: '250ms',
      },
      rotate: {
        '-45': '-45deg',
        '-90': '-90deg',
        '-180': '-180deg',
        '-270': '-270deg',
        '-360': '-360deg',
      },
      maxWidth: {
        1: '1rem',
        2: '2rem',
        3: '3rem',
        4: '4rem',
        5: '5rem',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
      },
    },
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
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('group-active-link', ':merge(.group).active-link &');
    }),
    require('tailwindcss-fluid-type'),
  ],
};
