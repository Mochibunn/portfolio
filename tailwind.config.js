/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "protest-revolution": ["ProtestRevolution", "sans-serif"],
        monocraft: ["Monocraft", "monospace"],
        barlow: ["Barlow Condensed Semibold Italic", "sans-serif"],
        "gochi-hand": ["Gochi Hand Regular", "sans-serif"],
        "asap": ["Asap", "Franklin Gothic Medium", "Arial Narrow", "Arial",
        "sans-serif"],
        "alegreya-medium": ["Alegreya Sans SC Medium", "sans-serif"],
        "alegreya-bold": ["Alegreya Sans SC Bold", "sans-serif"],
        "oleo": ["Oleo Script", "sans-serif"],
      },
      colors: {
        purp: "#290849",
        star: "#f2c85b",
      },
    },
  },
  plugins: [],
};
