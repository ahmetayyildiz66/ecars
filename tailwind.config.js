/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1440px'
    },
    container: {
      center: true,
      screens: {
        sm: '343px',
        md:' 704px',
        lg: '1224px'
      }
    },
    extend: {
      colors: {
        black: {
          '50': '#2C2A26'
        },
        gray: {
          '350': '#C0BFBE'
        },
        green: {
          '750': '#3C7D46'
        }
      }
    },
  },
  plugins: [],
}