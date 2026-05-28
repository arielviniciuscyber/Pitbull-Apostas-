/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0A0705',
        gold: '#E8921A',
        'gold-light': '#F5C842',
        steel: '#4A4A5A',
        red: '#CC2200',
        offwhite: '#F0EDE8',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
        accent: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
