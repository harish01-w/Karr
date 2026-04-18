/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2f4f3e", // Deep Green
        secondary: "#c9783b", // Burnt Orange
        light: "#f2f2f2", // Stone Gray
        dark: "#2b2b2b", // Dark Charcoal
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
