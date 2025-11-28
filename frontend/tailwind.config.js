/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#6366f1",
          700: "#4338ca"
        },
        slate: {
          100: "#f1f5f9",
          700: "#334155"
        }
      }
    }
  },
  plugins: []
};