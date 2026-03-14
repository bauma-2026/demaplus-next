import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        brand: {
          300: "#bacad3",
          500: "#8fa6b2",
          700: "#6f8895",
        },

        ink: "#111827",

        surface: "#ffffff",

        "surface-2": "#fafafa",

        stone: {
          300: "#c6b08a",
        },
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        ring: "0 0 0 4px rgba(186,202,211,0.35)",
      },
    },
  },

  plugins: [],
};

export default config;