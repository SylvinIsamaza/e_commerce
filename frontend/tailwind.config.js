/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    screens:{
      "800px":"800px",
      "1000px":"1000px"
    }
    },
  },
  plugins: [],
}