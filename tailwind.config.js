module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'flowing-river': "url('./src/assets/flowing-river.jpg')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
