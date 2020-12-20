const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        header: '#20232a',
        skyBlue: '#61DAFB',
        gunmental: '#282C34',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },  
}