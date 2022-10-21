module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        //'16': 'repeat(16, minmax(0, 1fr))',
        'hero-info': '200px minmax(900px, 1fr) 100px',
      },
      colors: {
        brand: {
          discord: '#5865F2',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
