/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#070724',
        'dark-gray': '#38384F',
        gray: '#838391',
        lines: '#393950'
      }
    },
    fontFamily: {
      sans: ['Spartan', 'sans-serif'],
      display: ['Antonio', 'sans-serif']
    },
    fontSize: {
      h1: '5rem',
      h2: '2.5rem',
      h3: '0.75rem',
      h4: '0.6875rem',
      body: '0.875rem'
    },
    lineHeight: {
      h1: '6.5rem',
      h2: '3.25rem',
      h3: '1.5625rem',
      h4: '1.5625rem',
      body: '1.5625rem'
    },
    letterSpacing: {
      h2: '-1.5px',
      h3: '2.6px',
      h4: '1px'
    },
    backgroundImage: {
      stars: 'url("/assets/background-stars.svg")'
    },
    maxWidth: {
      container: '1110px',
      none: 'none'
    },
    screens: {
      md: '768px',
      xl: '1110px'
    }
  },
  plugins: []
}
