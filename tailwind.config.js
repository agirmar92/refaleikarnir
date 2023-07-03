/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        aegir: "url('./images/aegir.jpg')",
        arnar: "url('./images/arnar.jpg')",
        atli: "url('./images/atli.jpg')",
        danni: "url('./images/danni.jpg')",
        gaui: "url('./images/gaui.jpg')",
        jonni: "url('./images/jonni.jpg')",
        krissi: "url('./images/krissi.jpg')",
        maggi: "url('./images/maggi.jpg')",
        vikingur: "url('./images/vikingur.jpg')",
      },
      colors: {
        winter: "#264653",
        summer: "#E76F51",
        "fox-silver": "#c0c0c0",
        "fox-red": "#d62828",
        "fox-white": "#efefef",
        "fox-black": "#1f1f1f",
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
