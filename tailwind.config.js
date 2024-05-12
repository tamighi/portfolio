/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#202023",
        secondary: "#2c2c4f"
      },
    },
    fontFamily: {
      elite: ["Special Elite", "cursive"],
      caprasimo: ["Caprasimo"]
    },
  },
  plugins: [],
}

