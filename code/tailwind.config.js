module.exports = {
  purge: ['./src/**/*.vue', './src/**/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        textA: '#AAAAAA',
        text0: '#000000',
        textTab: '#6b787f'
      },
      textColor: {
        primary: '#0085d0',
        black: '#000000'
      },
      backgroundColor: theme => ({
        ispr: '#0085D0',
        isGreen: '#8EC31E',
        isBlue: '#23C9CA'
      }),
      fontSize: {
        '4':'4px',
        '11': '11px',
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '28': "28px",
        '30': "30px",
        '48': '48px',
    
      }
    },
    screens: {
      sm: { max: '768px' },
      // => @media (min-width: 640px) { ... }
      // 'sm': '640px',
      // // => @media (min-width: 640px) { ... }

      md: '769px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
