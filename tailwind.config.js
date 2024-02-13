/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'light': '#E8E9F3',
      'dark': '#040404',
      'gray': '#2B4141',
      'blue': '#6564DB',
      'lightblue': '#76E5FC',
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}