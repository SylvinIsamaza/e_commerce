/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    screens:{
      "600px":"600px",
      "800px":"800px",
      "1000px":"1000px",
      "350px":"350px"
    }
    },
  },
  plugins: [],
}