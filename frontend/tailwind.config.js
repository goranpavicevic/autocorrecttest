module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        200: '500px',
      },
      height: {
        200: '500px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
