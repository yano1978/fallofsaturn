/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      red: '#231311',
      blue: '#121e23',
      firebrick: '#b22222',
      steelblue: '#065368',
      gray: '#cfcfcf',
      transparent: 'transparent',
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        hypo: ['HypotheticalmoonofMercury, sans-serif'],
      },
      animation: {
        fade: 'fade 0.25s ease-in-out',
      },
      keyframes: (theme) => ({
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
