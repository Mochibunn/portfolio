/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "protest-revolution": ["ProtestRevolution", "sans-serif"],
        "caveat-brush": ["Caveat Brush", "sans-serif"],
        monocraft: ["Monocraft", "monospace"],
        barlow: ["Barlow Condensed Semibold Italic", "sans-serif"],
      },
      colors: {
        purp: "#290849",
        star: "#f2c85b",
      },
    },
  },
  plugins: [],
};
