import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        sans:    ["'Syne'", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#08080a",
          2:       "#0f0f12",
          3:       "#161619",
        },
        surface: {
          DEFAULT: "#1c1c20",
          2:       "#242428",
        },
        ink: {
          DEFAULT: "#f0eee8",
          2:       "#a09e98",
          3:       "#5c5a56",
        },
        gold: {
          DEFAULT: "#c8a96e",
        },
        "accent-blue":  "#4f8ef7",
        "accent-green": "#4ecb8d",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to:   { opacity: "1", transform: "translateY(0)"    },
        },
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)"   },
          "50%":     { opacity: "0.5", transform: "scale(0.7)" },
        },
        scrollDrop: {
          "0%":   { transform: "scaleY(0)", transformOrigin: "top"    },
          "50%":  { transform: "scaleY(1)", transformOrigin: "top"    },
          "51%":  { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
      },
      animation: {
        "fade-up":     "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "pulse-dot":   "pulseDot 2s infinite",
        "scroll-drop": "scrollDrop 1.8s cubic-bezier(0.22,1,0.36,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;