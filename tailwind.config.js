/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInDelayed: {
          "0%, 40%": { opacity: "0" },
          "60%, 100%": { opacity: "1" },
        },
        fadeInDelayedMore: {
          "0%, 60%": { opacity: "0" },
          "80%, 100%": { opacity: "1" },
        },
        fadeOutDelayed: {
          "0%, 40%": { opacity: "1" },
          "60%, 100%": { opacity: "0" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(34,197,94,0.5)" },
          "50%": { boxShadow: "0 0 30px rgba(34,197,94,0.8)" },
        },
        gradientX: {
          "0%": {
            backgroundPosition: "0% 50%",
            background:
              "linear-gradient(90deg, rgba(239,68,68,0.2) 0%, rgba(15,23,42,0.8) 100%)",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            background:
              "linear-gradient(90deg, rgba(15,23,42,0.8) 0%, rgba(34,197,94,0.2) 100%)",
          },
          "100%": {
            backgroundPosition: "0% 50%",
            background:
              "linear-gradient(90deg, rgba(239,68,68,0.2) 0%, rgba(15,23,42,0.8) 100%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-glow": "pulseGlow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-delayed": "fadeInDelayed 8s forwards",
        "fade-in-delayed-more": "fadeInDelayedMore 8s forwards",
        "fade-out-delayed": "fadeOutDelayed 8s forwards",
        "gradient-x": "gradientX 8s ease infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 7s ease-in-out infinite 1s",
        "float-fast": "float 6s ease-in-out infinite 0.5s",
        "float-reverse-slow": "floatReverse 8s ease-in-out infinite",
        "float-reverse-medium": "floatReverse 7s ease-in-out infinite 1s",
        "float-reverse-fast": "floatReverse 6s ease-in-out infinite 0.5s",
        "fall-slow": "fall 10s linear infinite",
        "fall-medium": "fall 8s linear infinite 1s",
        "fall-fast": "fall 6s linear infinite 2s",
        "fall-slow-2": "fall 10s linear infinite 3s",
        "fall-medium-2": "fall 8s linear infinite 4s",
        "fall-fast-2": "fall 6s linear infinite 5s",
        scroll: "scroll 30s linear infinite",
        "scroll-reverse": "scroll-reverse 30s linear infinite",
      },
    },
  },
};
