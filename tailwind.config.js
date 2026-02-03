/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#22223b', // dark navy
        secondary: '#4a4e69', // muted purple
        accent: '#f2a900', // gold
        background: '#f9f7f7', // off-white
        muted: '#9a8c98', // grey-purple
      },
    },
  },
  plugins: [],
}
