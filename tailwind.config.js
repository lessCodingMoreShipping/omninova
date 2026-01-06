/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050505", // De diepzwarte Linear base
        foreground: "#ffffff",
        brand: {
          primary: "#6366f1", // Indigo-600 (chiquer dan standaard blauw)
          secondary: "#a855f7", // Purple voor subtiele gradients
        },
        gray: {
          950: "#070707",
          900: "#121212",
          800: "#1a1a1a",
        },
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        // Subtiele border glow voor de Bento cards
        "glass-glow": "0 0 20px rgba(99, 102, 241, 0.1)",
        "inner-light": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
};
