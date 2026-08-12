/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#07111f",
        panel: "#0b1b2e",
        cyan: {
          DEFAULT: "#16e0ff",
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
        },
        blueglow: "#0b78ff",
      },
      boxShadow: {
        glow: "0 0 35px rgba(22,224,255,.14)",
        cyan: "0 0 28px rgba(22,224,255,.22)",
      },
    },
  },
  plugins: [],
};