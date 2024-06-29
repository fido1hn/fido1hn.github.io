module.exports = {
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      colors: {
        'light-dark': '#202030',
        dark: '#20202D',
        'light-peach': '#eff1c5',
        ash: '#8C8C92',
        'dark-ash': '#363642',
        'dark-peach': '#bfc19e',
      },
    },
    screens: {
      tablet: '870px',
      laptop: '925px',
    },
  },
};
