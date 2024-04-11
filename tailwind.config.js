/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(min(10rem, 100%), 1fr))',
      },
      fontFamily: {
        'jaldi': ['"Jaldi"', 'sans-serif'], 
      },
      fontWeight: {
        'regular': '400',
        'bold': '700',
      },
    },
  },
  plugins: [],
}
