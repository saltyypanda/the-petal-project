import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        petal: {
          "primary": "#89CFF0",
          "secondary": "#4A90E2",
          "accent": "#F4C542",
          "neutral": "#35332C",
          "info": "#B5CDA3",
          "base-100": "#F8F7F4",
        }
      }
    ]
  }
} satisfies Config;
