import type { Config } from "tailwindcss";
export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(40px,30px) scale(1.15)" },
        },
        shine: { to: { backgroundPosition: "200% center" } },
        fadeup: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        shine: "shine 6s linear infinite",
        fadeup: "fadeup .8s cubic-bezier(.2,.9,.2,1) both",
      },
    },
  },
} satisfies Config;
