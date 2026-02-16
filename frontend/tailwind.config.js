/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde-dark': '#474747',
        'verde-gray': '#8F8B84',
        'verde-green-dark': '#606E52',
        'verde-green': '#91A56E',
        'verde-green-light': '#C0CCA4',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
