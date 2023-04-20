/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts}'],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 40s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-300px * 6))' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
}

