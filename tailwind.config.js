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
        homepageIcon: '#B6FF2E',
        accent: '#B6FF2E',
        ink: {
          950: '#14171B',
          900: '#1F2329',
          800: '#262B32',
          700: '#333A42',
          600: '#454E58',
        },
        slate: colors.slate,
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
