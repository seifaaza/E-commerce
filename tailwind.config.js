

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      fontFamily: {
        main: ['Poppins', 'sans-serif'],
        title: ['Dela Gothic One', 'cursive']
      },
      colors: {
        'dark': '#0d111a',
      },
      gridTemplateColumns: {
        'main': 'repeat(auto-fit, minmax(250px, 270px))',
      }
    },
    screens: {
      mobile: "320px",
      // => @media (min-width: 320px) { + 320px }
      tablet: "640px",
      // => @media (min-width: 640px) { + 640px }
      laptop: "1024px",
      // => @media (min-width: 1024px) { + 1024px }
      desktop: "1440px",
      // => @media (min-width: 1440px) { + 1440px }
    },
 
  },
  plugins: [],
}

