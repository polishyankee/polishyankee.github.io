const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['app/**/*.{js,ts,tsx}','components/**/*.{js,ts,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        homepageIcon: 'var(--accent)',
        accent: 'rgb(var(--accent-rgb) / <alpha-value>)',
        ink: {
          950: 'rgb(23 22 21 / <alpha-value>)',
          900: 'rgb(29 27 25 / <alpha-value>)',
          800: 'rgb(41 38 35 / <alpha-value>)',
          700: 'rgb(56 51 46 / <alpha-value>)',
          600: 'rgb(81 75 68 / <alpha-value>)',
        },
        slate: { ...colors.stone, 500: colors.stone[400] },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fill-x': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.45s ease-out both',
        'fill-x': 'fill-x 1.4s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      zIndex: {
        '-10': '-10',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
