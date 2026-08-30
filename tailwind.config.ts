import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette drawn from the "da Lola" logo (Italian tricolore + cream)
        cream: {
          DEFAULT: "#f4f1e9",
          dark: "#e9e3d5",
        },
        basil: {
          DEFAULT: "#2f7d32",
          dark: "#1f5c21",
        },
        tomato: {
          DEFAULT: "#c81f1f",
          dark: "#7a1414",
        },
        charcoal: "#1c1a17",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
