/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // put it here NOT outside of "extend" or it will overwrite all the current colors
      colors: {
        background: "hsl(var(--color-background) / <alpha-value>)",
        from: "rgba(var(--color-from) / <alpha-value>)",
        to: "rgba(var(--color-to) / <alpha-value>)",
        "assent-1": "hsl(var(--color-assent-1) / <alpha-value>)",
        "assent-2": "hsl(var(--color-assent-2) / <alpha-value>)",
        head: "hsl(var(--color-text-head) / <alpha-value>)",
        main: "hsl(var(--color-text-main) / <alpha-value>)",
        primary: "hsl(var(--color-text-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-text-secondary) / <alpha-value>)",
        "text-base": "hsl(var(--color-text-base) / <alpha-value>)",
        "text-base-2": "hsl(var(--color-text-base-2) / <alpha-value>)",
        "card-head": "hsl(var(--color-card-head) / <alpha-value>)",
        "card-border": "hsl(var(--color-card-border) / <alpha-value>)",
        "card-1": "rgba(var(--color-card-primary) / <alpha-value>)",
        "card-2": "rgba(var(--color-card-secondary) / <alpha-value>)",
        "card-assent-1": "hsl(var(--color-card-assent-1) / <alpha-value>)",
        "card-assent-2": "hsl(var(--color-card-assent-2) / <alpha-value>)",
      },
      screens: {
        phone: "500px",
      },
    },
  },
  plugins: [],
};
