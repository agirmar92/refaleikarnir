/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        aegir: "url('../src/images/aegir.jpg')",
        arnar: "url('../src/images/arnar.jpg')",
        atli: "url('../src/images/atli.jpg')",
        danni: "url('../src/images/danni.jpg')",
        gaui: "url('../src/images/gaui.jpg')",
        jonni: "url('../src/images/jonni.jpg')",
        krissi: "url('../src/images/krissi.jpg')",
        maggi: "url('../src/images/maggi.jpg')",
        vikingur: "url('../src/images/vikingur.jpg')",
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
