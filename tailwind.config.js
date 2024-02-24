/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'Green-700': '#132A13',
        'Green-600': '#31572C',
        'Green-500': '#4F772D',
        'Green-400': '#90A955',
        'Green-300': '#ECF3E9',
        'Green-light': '#6D9773',
        'Yellow-500': '#FFBA00',
        'Brown-500': '#BB8A52'
      }
    },
  },
  plugins: [],
};
