/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        winter: "#264653",
        "fox-white": "#efefef",
      },
      textShadow: {
        DEFAULT: "0px 3px black",
      },
    },
    fontFamily: {
      tilliana: ["Tillana", "cursive"],
      gantari: ["Gantari"],
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
  important: true,
};
