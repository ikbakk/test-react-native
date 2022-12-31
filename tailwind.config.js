/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#93D564',
        white: '#f1f1f1',
        blue: '#77BEF5',
        red1: '#CD5D58',
        yellow: '#FCBE7E'
      }
    }
  },
  plugins: []
}
