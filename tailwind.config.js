/** @type {import('tailwindcss').Config} */

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

function varColor(name) {
  const color = { DEFAULT: `rgb(var(--${name}) / <alpha-value>)` };
  for (const shade of shades) {
    color[shade] = `rgb(var(--${name}-${shade}) / <alpha-value>)`;
  }
  return color;
}

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: varColor("primary"),
        secondary: varColor("secondary"),
        tertiary: varColor("tertiary"),
      },
      boxShadow: {
        "glow-soft": "0 0 28px rgb(var(--primary) / .22)",
      },
    },
  },
  plugins: [],
};
