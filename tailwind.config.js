/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          gray: 'hsl(0, 0%, 75%)',
          grayishViolet: 'hsl(257, 7%, 63%)',
          veryDarkBlue: 'hsl(255, 11%, 22%)',
          VeryDarkViolet: 'hsl(260, 8%, 14%)',
          cyan: 'hsl(180, 66%, 49%)',
          darkViolet: 'hsl(257, 27%, 26%)'
        }
      },
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'] 
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '100%': {transform: 'scaleY(1)'},
        }
      },
      animation: {
        'open-menu': 'open-menu 0.2s ease-in-out'
      },
    },
  },
  plugins: [],
}

