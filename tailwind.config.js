/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: 'Nunito, sans-serif',
        jersey: '"Jersey 15", serif',
        engagement: '"Engagement", serif',
      },
    },
    colors: {
      ...colors,
      primary: colors.emerald,
      secondary: colors.teal,
    },
    textColor: {
      ...colors,
      primary: colors.emerald,
      secondary: colors.teal,
    },
  },
  plugins: [],
}

