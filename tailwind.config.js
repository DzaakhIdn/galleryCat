/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode : 'class',
  theme: {
    extend: {
      "fontFamily": {
        'Poppins': 'poppins',
        'Montserrat': 'montserrat'
      },
      backgroundImage: {
        'bebek': "url('/img/bebek.jpg')",
        'tdk-menarik': "url('/img/tdk-menarik.jpg')",
      },
    },
  },
  plugins: [],
}
