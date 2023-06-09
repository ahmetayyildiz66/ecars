/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['"Inter", sans-serif'],
      'inter-tight': ['"Inter Tight", sans-serif']
    },
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
          '50': '#2C2A26',
        },
        gray: {
          '10': '#E6E6E6',
          '25': '#F0F0F0',
          '50': '#F6F5F4',
          '250': '#A3A3A3',
          '350': '#C0BFBE',
          '450': '#D1D1D1',
          '550': '#767676',
          '750': '#484848',
          '950': '#1A1A1A',
        },
        green: {
          '750': '#3C7D46'
        },
        brown: {
          '550': '#E49A49'
        },
        blue: {
          '450': '#0394FC'
        },
        orange: {
          '100': '#FFF1E8',
          '450': '#DD7437'
        }
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(163px, 1fr))'
      }
    },
  },
  plugins: [],
}