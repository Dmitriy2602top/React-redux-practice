/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
    theme: {
        container: { center: true, padding: '2rem' },
        screens: { xxl: { max: '1440px' }, lg: { max: '992px' }, md: { max: '768px' }, sm: { max: '480px' } },
        fontSize: {
            12: '0.75rem',
            13: '0.81rem',
            14: '0.875rem',
            16: '1rem',
            18: '1.125rem',
            20: '1.25rem',
            22: '1.375rem',
            23: '1.438rem',
            24: '1.5rem',
            25: '1.5625rem',
            28: '1.75rem',
            30: '1.875rem',
            32: '2rem',
            34: '2.125rem',
            40: '2.5rem',
            44: '2.75rem',
            50: '3.125rem',
            58: '3.625rem',
            80: '5rem',
            90: '5.625rem',
            96: '6rem',
        },
        letterSpacing: {
            link: '-0.3px',
            heading: '-1.35px',
            subheading: '-0.65px',
            text: '-0.35px',
        },
        lineHeight: {
            '0': 'none',
            '133%': '133%',
        },
        borderRadius: {
            0: '0rem',
            4: '0.25rem',
            12: '0.75rem',
            16: '1rem',
            20: '1.25rem',
            24: '1.5rem',
            32: '2rem',
            44: '2.75rem',
            50: '50%',
            100: '100px',
        },
        rotate: { headline: '-4.5deg' },
        fontWeight: {
            100: '100',
            200: '200',
            300: '300',
            400: '400',
            460: '460',
            500: '500',
            540: '540',
            600: '600',
            700: '700',
            800: '800',
            900: '900',
        },
        extend: {
            colors: {
                'text-primary': '#000000',
                'text-secondary': '#A8E9FF',
                'text-header': '#81929B',
                'text-header-hover': '#65737A',
                'text-accent': '#3AA7CD',
                'text-footer-accent': '#31CAFF',
                'text-gray': '#8D8D8D',
                'text-pogoda-gray': '#939CB0',
                'text-pogoda-blue': '#4793FF',
                'text-blog': '#596569',
                'text-form': '#172E49',
                'text-found': '#6D8C9D',
                'btn-black': '#172E49',
                'bg-primary': '#EAEDEE',
                'bg-pagination': '#D9D9D9',
                'bg-pagination-active': '#3AA7CD',
                'bg-blue': '#3AA7CD',
                'bg-input': '#F3F3F3',
                'btn-blue': '#3AA7CD',
                'btn-blue-hover': '#373737',
                'btn-blue-active': '#484848',
                'btn-white': '#FFFFFF',
                'btn-white-hover': '#FFFFFF',
                'btn-white-active': '#FBFBFB',
                'border-btn': 'rgba(0, 0, 0, 0.06)',
            },
            maxWidth: { yachtTitle: '28.88rem' },
            width: { behind: 'var(--padding-behind)' },
            boxShadow: {
                weatherBlock: '2px 5px 25px -3px rgba(180, 180, 180, 0.25)',
                forms: '0px 18px 41px 0px rgba(0, 0, 0, 0.10)',
            },
        },
        plugins: [],
    },
};
