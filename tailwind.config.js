/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        winter: '#2E3B4E',
        'winter-light': '#8798b5',
        'fox-silver': '#c0c0c0',
        'fox-red': '#d62828',
        'fox-white': '#efefef',
        'fox-black': '#1f1f1f',
        tile: '#a8b5ba',
      },
      textShadow: {
        DEFAULT: '0px 3px black',
      },
      backgroundImage: {
        'fox-bg': "url('/fox_bg.jpg')",
      },
    },
    fontFamily: {
      tilliana: ['Tillana', 'cursive'],
      gantari: ['Gantari'],
    },
  },
  plugins: [
    // require('tailwindcss-opentype'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
  important: true,
}
