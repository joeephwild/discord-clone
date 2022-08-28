/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "herocover": "url('./assets/images/hero-bg.jpg')",
      },
      fontFamily: {
        'whitney-bold': ['whitney-bold', 'Sans-serif'],
        'whitney-book': ['whitney-book', 'Sans-serif'],
        'whitney-light': ['whitney-light', 'Sans-serif'],
        'whitney-semibold': ['whitney-semibold', 'Sans-serif'],
        'whitney-bold': ['whitney-medium', 'Sans-serif'],
        'Ginto-nord': ['Ginto nord', 'Sans-serif'],
      }
    },
  },
  plugins: [],
}
