/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        singleday: ["SingleDay", "sans-serif"],
        "caveat-brush": ["Caveat Brush", "sans-serif"],
        monocraft: ["Monocraft", "monospace"],
      },
    },
  },
  plugins: [],
};
