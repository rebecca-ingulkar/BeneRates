/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './**/*.{js,ts,jsx,tsx}',
    './components/**/*.{ts,tsx,js,jsx}', // all your components
    './routes/**/*.{ts,tsx,js,jsx}', // optional: route files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22223b', // your dark navy
        secondary: '#4a4e69', // muted purple
        accent: '#f2a900', // gold
        background: '#f9f7f7', // off-white
        muted: '#9a8c98', // grey-purple
      },
    },
  },
  plugins: [],
}
