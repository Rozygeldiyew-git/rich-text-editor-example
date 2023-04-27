module.exports = {
    mode: 'jit',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-color': '#01a84a',
                'second-brand': '#95cf1d',
                'second-primary': '#fbfcfe',
                'garaly-renk': '#2d1d3f',
                'background-slider': '#fcfff0',
                'bg-admin-hover': '#0f172a'
            },
            blur: {
                xs: '2px'
            }
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}