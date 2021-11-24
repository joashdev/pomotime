module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'flowing-river': "url('./src/assets/flowing-river.jpg')",
        'green-trees': "url('./src/assets/green-trees.jpg')",
        'study-lofi': "url('./src/assets/study-lofi.jpg')",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      backgroundOpacity: ['active'],
    },
  },
  plugins: [],
};
