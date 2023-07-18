/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        aegir: "url('../images/aegir.jpg')",
        arnar: "url('../images/arnar.jpg')",
        atli: "url('../images/atli.jpg')",
        danni: "url('../images/danni.jpg')",
        gaui: "url('../images/gaui.jpg')",
        jonni: "url('../images/jonni.jpg')",
        krissi: "url('../images/krissi.jpg')",
        maggi: "url('../images/maggi.jpg')",
        vikingur: "url('../images/vikingur.jpg')",
        coverPhoto: "url('../images/refir.jpeg')",
      },
      colors: {
        winter: "#264653",
        "winter-light": "#8798b5",
        summer: "#E76F51",
        "fox-silver": "#c0c0c0",
        "fox-red": "#d62828",
        "fox-white": "#efefef",
        "fox-black": "#1f1f1f",
        tile: "#a8b5ba",
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
    require("tailwindcss-opentype"),
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
