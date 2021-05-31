module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'logo': ["'Black And White Picture'", "sans-serif"]
      },
      colors: {
        wca: "#7868E6"
      },
      screens: {
        '8xl': '1600px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
