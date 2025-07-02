/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./index.html",
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class', // Enable class-based dark mode
    plugins: [
        require('tailwindcss-rtl'), // RTL support
    ],
}
