import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "#EEEEEE", // Off-white
        foreground: "#777C6D", // Olive Drab
        accent: "#B7B89F",     // Sage
        border: "#CBCBCB",     // Silver
        primary: "#777C6D",
        secondary: "#B7B89F",
        "glass-light": "rgba(255, 255, 255, 0.08)",
        "glass-border": "rgba(203, 203, 203, 0.15)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
