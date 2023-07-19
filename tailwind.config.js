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
        coverPhoto: "url('../images/coverPhotos/refir.jpg')",
        "coverPhoto-2023": "url('../images/coverPhotos/2023.jpg')",
        "coverPhoto-2022": "url('../images/coverPhotos/2022.jpg')",
        "coverPhoto-2020-summer":
          "url('../images/coverPhotos/2020-summer.jpg')",
        "coverPhoto-2020-winter":
          "url('../images/coverPhotos/2020-winter.jpg')",
        "coverPhoto-2019-summer":
          "url('../images/coverPhotos/2019-summer.jpg')",
        "coverPhoto-2019-winter":
          "url('../images/coverPhotos/2019-winter.jpg')",
        "coverPhoto-2018-summer":
          "url('../images/coverPhotos/2018-summer.jpg')",
        "coverPhoto-2018-winter":
          "url('../images/coverPhotos/2018-winter.jpg')",
        "coverPhoto-2017-winter":
          "url('../images/coverPhotos/2017-winter.jpg')",
        "coverPhoto-2016-summer":
          "url('../images/coverPhotos/2016-summer.jpg')",
        "coverPhoto-2016-winter":
          "url('../images/coverPhotos/2016-winter.jpg')",
        "coverPhoto-2015-summer":
          "url('../images/coverPhotos/2015-summer.jpg')",
        "coverPhoto-2015-winter":
          "url('../images/coverPhotos/2015-winter.jpg')",
        "coverPhoto-2014-summer":
          "url('../images/coverPhotos/2014-summer.jpg')",
        "coverPhoto-2014-winter":
          "url('../images/coverPhotos/2014-winter.jpg')",
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
