/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '../index.html',
    './**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        clinical: {
          950: '#0a0f1a',
          900: '#0f1729',
          800: '#151f38',
          700: '#1e2a47',
        },
      },
    },
  },
  plugins: [],
}
