module.exports = {
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      colors: {
        primary: '#eff1c5',
        'primary-dark': '#111111',
        'light-dark': '#202030',
        dark: '#20202D',
        'light-peach': '#eff1c5',
        ash: '#8C8C92',
        'dark-ash': '#363642',
        'dark-peach': '#bfc19e',
      },
      borderRadius: {
        '4xl': '3rem',
      },
      screens: {
        tablet: '870px',
        laptop: '925px',
      },
    },
  },
};
