/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: colors.white,
      'bg-blue': '#0B0C13',
      'main-blue': '#11141C',
      'light-blue': '#181D2A',
      'accent-blue': '#198AFF',
      'gray': '#474747',
      'light-gray': '#ABABAB',
      'green': '#3CFF8A',
      'red': '#FF3C3C'
    },
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'cursive'],
      },
    },
  },
  plugins: [],
}

