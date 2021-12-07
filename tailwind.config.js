const { colors } = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: {
          darkest: '#1C1C1C',
          dark: '#5D5D5D',
          DEFAULT: '#A4A4A4',
          light: '#D0D0D0',
          lightest: '#E0E0E0',
        },
        white: {
          dark: '#F1F1F1',
          DEFAULT: '#FAFAFA'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
