/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baro-blue': '#4361EE',
        'baro-bg': '#F8F9FA',
      },
      fontFamily: {
        'noto': ['"Noto Sans KR"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

