/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extends: {
      colors: {
        primary: "#202023",
      },
      fontFamily: {
        elite: ["Special Elite", "cursive"],
        caprasimo: ["Caprasimo"]
      },
    },
  },
  plugins: [],
}

