import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'Inter', 'sans-serif'], // Main Body Font
      serif: ['Playfair Display', 'Lora', 'serif'], // Heading Font
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // MAPPING GLOBAL VARIABLES
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#0f2e24", // Deep Forest Green
          foreground: "#FDFBF7", // Warm Cream
        },
        secondary: {
          DEFAULT: "#E8DCCA", // Warm Sand
          foreground: "#0f2e24",
        },
        muted: {
          DEFAULT: "#F5F5F0",
          foreground: "#5D4037",
        },
        accent: {
          DEFAULT: "#C8592B", // Copper
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "#E6B8A2", // Rose Gold border
        input: "#E6B8A2",
        ring: "#C8592B", // Copper ring

        // EXPLICIT LUXURY PALETTE
        sage: {
          light: "#D4E4BC", // New Growth
          DEFAULT: "#A4B494", // Botanical
          dark: "#4A5D4B",
        },
        terra: {
          light: "#E6B8A2", // Rose Gold
          DEFAULT: "#C8592B", // Copper
          dark: "#8c5c2c", // Bronze
        },
        forest: {
          DEFAULT: "#0f2e24", // Deep Green
        },
        cream: "#FDFBF7", // Background
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;