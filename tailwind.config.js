/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx,html}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        gray: '#d1d5db',
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        bermuda: '#78dcca',
        black: '#000000',
        red_700: '#b91c1c',
        slate: '#94a3b8',
        regalblue: '#243c5a',
        sky_500: '#0ea5e9',
        bckblue: '#22203f',
        emerald_600: '#059669',
        fuchsia_600: '#c026d3',
        pink_300: '#f9a8d4',
        rose_50: '#fff1f2',
      },
    },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },

  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
