/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ping-once': 'ping 2s cubic-bezier(0, 0, 0.2, 1)'
      },
      keyframes: {
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: 0
          }
        },
      },
    },
  },
  plugins: [],
}
