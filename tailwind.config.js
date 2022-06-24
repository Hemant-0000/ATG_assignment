/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'IBM': ['IBM Plex Sans', 'cursive'],
      },
      boxShadow:{
        'my-shadow': '0px 1px 2px rgba(0, 0, 0, 0.12)'
      },
    },
  },
  plugins: [],
}
