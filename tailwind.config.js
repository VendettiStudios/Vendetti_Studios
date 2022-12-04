/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        fontFamily:{
            Tiro:["Tiro Tamil, serif"],
            Hina:["Hina Mincho, serif"],
            Mont:["Montserrat, sans-serif"]
        },
    },
  },
  plugins: [],
}
