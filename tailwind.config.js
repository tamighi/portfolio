/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#202023",
      black: "#000",
      white: "#fff"
    },
    fontFamily: {
      elite: ["Special Elite", "cursive"],
      caprasimo: ["Caprasimo"]
    },
  },
  plugins: [],
}

