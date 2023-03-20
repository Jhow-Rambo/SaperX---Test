/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: "#FFF",
        black: "#000",
        'primary-green': '#33B266',
        'primary-yellow': '#CFD15C',
        'primary-red': '#D15C5C',
      },
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '4k': '2560px'
      },
    },
  },
  plugins: [],
}
