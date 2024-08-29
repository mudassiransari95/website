/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveAndRotate: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(20px, -20px) rotate(15deg)' },
          '75%': { transform: 'translate(-20px, 20px) rotate(-15deg)' },
        },
      },
      animation: {
        moveAndRotate: 'moveAndRotate 5s linear infinite',
      },
    },
  },
  plugins: [],
}

