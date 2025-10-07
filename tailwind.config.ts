import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Primary colors - Turquoise/Cyan accent
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        // Secondary colors
        secondary: {
          DEFAULT: "var(--secondary)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        // Dark mode backgrounds
        "dark-bg": {
          DEFAULT: "var(--dark-bg)",
          lighter: "var(--dark-bg-lighter)",
          card: "var(--dark-bg-card)",
        },
        // Accent colors
        accent: {
          turquoise: "var(--accent-turquoise)",
          cyan: "var(--accent-cyan)",
          green: "var(--accent-green)",
          blue: "var(--accent-blue)",
        },
        // Border colors
        border: {
          DEFAULT: "var(--border)",
          light: "var(--border-light)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-geist-mono)", "SFMono-Regular", "Menlo", "monospace"],
      },
      backgroundImage: {
        "gradient-dark": "var(--gradient-dark)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-section": "var(--gradient-section)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-in-up": "slideInUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
