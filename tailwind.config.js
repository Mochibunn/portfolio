/** @type {import('tailwindcss').Config} */

const temp = {
  "alegreya-black": ["Alegreya Sans SC Black", "sans-serif"],
  "alegreya-black-italic": ["Alegreya Sans SC Black Italic", "sans-serif"],
  "alegreya-bold": ["Alegreya Sans SC Bold", "sans-serif"],
  "alegreya-bold-italic": ["Alegreya Sans SC Bold Italic", "sans-serif"],
  "alegreya-extra-bold": ["Alegreya Sans SC Extra Bold", "sans-serif"],
  "alegreya-extra-bold-italic": [
    "Alegreya Sans SC Extra Bold Italic",
    "sans-serif",
  ],
  "alegreya-italic": ["Alegreya Sans SC Italic", "sans-serif"],
  "alegreya-light": ["Alegreya Sans SC Light", "sans-serif"],
  "alegreya-light-italic": ["Alegreya Sans SC Light Italic", "sans-serif"],
  "alegreya-medium": ["Alegreya Sans SC Medium", "sans-serif"],
  "alegreya-medium-italic": ["Alegreya Sans SC Medium Italic", "sans-serif"],
  alegreya: ["Alegreya Sans SC Regular", "sans-serif"],
  "alegreya-thin": ["Alegreya Sans SC Thin", "sans-serif"],
  "alegreya-thin-italic": ["Alegreya Sans SC Thin Italic", "sans-serif"],
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "protest-revolution": ["ProtestRevolution", "sans-serif"],
        "caveat-brush": ["Caveat Brush", "sans-serif"],
        monocraft: ["Monocraft", "monospace"],
        barlow: ["Barlow Condensed Semibold Italic", "sans-serif"],
        "gochi-hand": ["Gochi Hand Regular", "sans-serif"],
        ...temp,
      },
      colors: {
        purp: "#290849",
        star: "#f2c85b",
      },
    },
  },
  plugins: [],
};
