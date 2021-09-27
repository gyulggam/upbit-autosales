const colors = require('tailwindcss/colors')

module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {},
        container: {
            center: true,
        },
        colors: {
            primary: 'var(--color-primary)',
            secondary: 'var(--color-secondary)',
            arrowup: '#d60000',
            arrowdown: '#0051c7'
        },
        textColor: {
            primary: '#111827',
            secondary: '#9CA3AF',
            arrowup: '#d60000',
            arrowdown: '#0051c7'
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
