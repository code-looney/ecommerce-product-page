/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": "hsl(26, 100%, 55%)",
        "lightGrayish": "hsl(219, 9%, 45%)"
      }
    },
  },
  plugins: [],
}