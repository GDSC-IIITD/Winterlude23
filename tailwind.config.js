/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'googleRed': "#EA4235",
      'googleBlue': "#2A318A",
      'googleGreen': "#109D58",
      'googleYellow': "#FABD03",
      'textMain': "#1E1E1E",
      'textSecondary': "#91969F",
    },
    fontFamily: {
      'google': ['Space Grotesk','sans-serif'],
      'roboto': ['Roboto','sans-serif'],
    },
    screens: {
      'small':{
        'max':'800px'
      },
      'large':{
        'min':'800px'
      }
    },
  },
  plugins: [],
}
