const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        screens: {
            xs: "475px",
            ...defaultTheme.screens,
        },
        fontFamily: {
            openSans: ["Open Sans", "sans-serif"],
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
