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
          darkest: '#F1F1F1',
          dark: '#FAFAFA',
          DEFAULT: '#ffffff',
        }
      },
      backgroundImage: {
        'mmm-home': "url('/images/mmm.gif')",
        'mmm-about': "url('/images/manfred-background.png')",
      },
      keyframes: {
        'fade-in': {
          '0%': {
              opacity: '0',
          },
          '100%': {
              opacity: '1',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
          },
          '100%': {
              opacity: '1',
          },
        },
        'fade-border-bottom': {
          '0%': {
            visibility: 'hidden',
            transform: 'scaleX(0)',
          },
          '100%': {
            visibility: 'visible',
            transform: 'scaleX(1)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in',
        'fade-in-up': 'fade-in-up 1s ease-in',
        'fade-border-bottom': 'fade-border-bottom 1s ease-in',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
