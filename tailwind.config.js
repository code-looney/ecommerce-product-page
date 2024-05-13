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
        "paleOrange": "hsl(25, 100%, 94%)",
        "darkGrayish": "hsl(219, 9%, 45%)",
        "grayishBlue": "hsl(220, 14%, 75%)"
      }
    },
  },
  plugins: [],
}