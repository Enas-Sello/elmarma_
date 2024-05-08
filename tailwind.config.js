/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#624CF5',
          50: ' #F6F8FD',
          DEFAULT: '#624CF5',
        }
      }
    }
  },
  plugins: [],
  darkMode: 'class'
};
