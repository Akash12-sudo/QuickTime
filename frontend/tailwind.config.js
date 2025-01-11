/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        secondarylight: 'var(--secondarylight)',
        grayish: 'var(--grayish)',
        graytext: 'var(--graytext)',
        imagebackground: 'var(--imagebackground)',
      },
      fontFamily: {
        spartan: ['var(--font-league-spartan)', 'sans-serif'],
      },
      fontWeight: {
        mediumbold: '700',
        mediumlight: '400',
      },
    },
  },
  plugins: [],
};
