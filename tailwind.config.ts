import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        aspal: ["'Aspal'", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Additional warm brown tones
        coffee: {
          50: "hsl(30, 40%, 95%)",
          100: "hsl(30, 40%, 90%)",
          200: "hsl(30, 40%, 80%)",
          300: "hsl(30, 40%, 70%)",
          400: "hsl(30, 40%, 60%)",
          500: "hsl(30, 45%, 45%)",
          600: "hsl(30, 50%, 40%)",
          700: "hsl(25, 50%, 35%)",
          800: "hsl(25, 55%, 30%)",
          900: "hsl(20, 60%, 25%)",
        },
        beige: {
          50: "hsl(35, 40%, 98%)",
          100: "hsl(35, 40%, 95%)",
          200: "hsl(35, 40%, 92%)",
          300: "hsl(35, 35%, 88%)",
          400: "hsl(30, 35%, 85%)",
          500: "hsl(30, 30%, 80%)",
          600: "hsl(30, 25%, 75%)",
          700: "hsl(28, 25%, 70%)",
          800: "hsl(28, 20%, 65%)",
          900: "hsl(25, 20%, 60%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
