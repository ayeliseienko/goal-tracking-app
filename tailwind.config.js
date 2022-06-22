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
      blue: '#1a56db',
      lightBlue: '#a4cafe',
      darkBlue: '#1e429f',
      green: '#b7e8ce',
      yellow: '#fddd8a',
      lightRed: '#f8b8a8',
      darkRed: '#d00000',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
