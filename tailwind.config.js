/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
      brand: "#0587C7",
      brand2: "#EC4899",
      brand3: "#9B9C9D",
      brand4: "#4A3AB3",
    },},
  },
  plugins: [],
}

