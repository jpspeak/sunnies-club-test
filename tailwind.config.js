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
      'at-surt': ['"AT Surt"', 'sans-serif'],
      poppins: ['var(--font-poppins)']
    },
    extend: {
      colors: {
        'soft-black': {
          50: '#F3F3F2',
          100: '#D8D6D5',
          300: '#A19E9B',
          400: '#86827D',
          700: '#342C26'
        },
        'gray-neutral': {
          50: '#F4F4F4',
          100: '#DADADB',
          200: '#C0C0C2',
          300: '#A6A6A9',
          400: '#8C8C91',
          500: '#737378'
        },
        red: {
          50: '#FDEDE6',
          100: '#F9D5C6',
          700: '#CE5119'
        },
        blue: {
          50: '#E6EBF1',
          500: '#466C8F'
        },
        green: {
          800: '#93C06D',
          900: '#A2A561'
        },
        success: {
          700: '#728C66'
        },
        error: {
          700: '#B44720',
          900: '#90391A'
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
