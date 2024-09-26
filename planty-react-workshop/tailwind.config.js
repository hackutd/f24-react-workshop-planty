/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: '#FFF8EE',
      backgroundDark: '#F9E7CD',
      backgroundDarker: '#E2CCAC',
      text: '#52280E',
      textDark: '#000000',
      textLight: '#CC9D80',
      primary: '#A1653F'
    },
    extend: {
      fontFamily: {
        jua: ['Jua', 'sans-serif'],
        balsamiq: ['Balsamiq Sans', 'cursive'],
      },
    },
  },
  plugins: [],
}

