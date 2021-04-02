module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme =>({
      'ispr': '#0085D0',
      'isGreen': '#8EC31E',
      'isBlue': '#23C9CA',
    }),
    fontSize:{
      '11':'11px',
      '15':'15px',
      '13':'13px'
    },
    screens:{
      'msm': {'max': '766px'},
      // => @media (min-width: 640px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
