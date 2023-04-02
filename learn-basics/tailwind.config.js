/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    extend: {
      backgroundColor: '#13ce66',
    }
  } ,
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'bgGray': '#f8f8f8'
      },
      dropShadow: {
        'xl': '0 7px 7px rgba(31, 182, 255, 1)',
      }
    }
  },
  fontFamily: {
    poppins: ['Poppins', 'sans-serif']
  },
  plugins: [],
}
