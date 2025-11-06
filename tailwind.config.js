/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6c5ce7',
        primary2: '#7b61ff',
        dark: '#0b132b',
        card: '#121a2d',
        text: '#e6e9ef',
        muted: '#9aa4b2'
      },
      boxShadow: {
        soft: '0 10px 20px rgba(0,0,0,0.12)',
        ring: '0 0 0 1px rgba(255,255,255,0.06)'
      }
    },
  },
  plugins: []
};