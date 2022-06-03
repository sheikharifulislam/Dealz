const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx,}'],
    theme: {
        extend: {},
        screens: {
            xs: '475px',
            ...defaultTheme.screens,
        },
        fontFamily: {
            sans: ['ui-sans-serif', 'system-ui'],
            serif: ['ui-serif', 'Georgia'],
            mono: ['ui-monospace', 'SFMono-Regular'],
            openSans: ['Open Sans', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif']
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms'),
    ],
};
