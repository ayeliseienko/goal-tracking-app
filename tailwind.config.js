module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: '#fbfbfb',
      lightGrey: '#f4f4f4',
      darkGrey: '#7e7e7e',
      black: '#000',
      blue: '#2d88ff',
      green: '#b9efd3',
      lightRed: '#f8b8a8',
      darkRed: '#d00000',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
