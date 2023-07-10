/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      sans: ['"AT Surt"', 'sans-serif'],
      'at-surt': ['"AT Surt"', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#e7470b',
        neutral: '#c0c0c2',
        'soft-black': {
          700: '#342C26'
        },
        'gray-neutral': {
          50: '#F4F4F4',
          200: '#C0C0C2',
          300: '#A6A6A9',
          500: '#737378'
        }
      },
      fontSize: {
        xxs: '10px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
