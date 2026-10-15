/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        industrial: {
          950: '#090c10',
          900: '#0f141c',
          850: '#151b26',
          800: '#1d2535',
          700: '#2d384e',
          accent: '#f97316',
          cyan: '#06b6d4',
        }
      }
    },
  },
  plugins: [],
}