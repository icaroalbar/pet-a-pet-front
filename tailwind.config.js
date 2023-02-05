/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16479d",
        secondary: "#ffd400",
        gray: {
          primary: "#eee",
          secondary: "#444"
        }
      }
    },
  },
  plugins: [],
}