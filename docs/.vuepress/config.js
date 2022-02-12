module.exports = {
    // ...
    postcss: {
        plugins: [
            require('tailwindcss')('./tailwind.config.js'),
            require('autoprefixer'),
        ]
    }
}