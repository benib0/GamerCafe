/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        Arcade: ['Arcade', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};