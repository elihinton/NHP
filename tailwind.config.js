/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx,js,ts}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main':"url('./src/assets/main-image.jpeg')"
      },
      height:{
        '97':'27rem',
        '98':'30rem',
        '99':'33rem',
        '100':'36rem',
        '101':'39rem',
        '102':'42rem'
      },
      screens: {
        sm: '640px',  // mobile (sm) starts at 640px
        md: '768px',  // tablet (md) starts at 768px
        lg: '1024px', // laptop (lg) starts at 1024px
        xl: '1280px'
      }
    },
  },
  plugins: [],
}

