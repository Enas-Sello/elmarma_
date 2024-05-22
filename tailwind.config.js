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
        primary: '#194229',
        mainDark: '#222222',
        mainWhite: '#EDF0F3',
        mainGray: '#B0B0B0',
        darkGray: '#737373'
      }
    },
    plugins: [],
    darkMode: 'class'
  }
};
