import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', "sans-serif"],
        body: ['"Plus Jakarta Sans"', "sans-serif"],
        hand: ['"Caveat"', "cursive"],
      },
      colors: {
        electric: {
          50: "#eef2ff",
          100: "#dbe3ff",
          200: "#b6c6ff",
          300: "#84a0ff",
          400: "#5876ff",
          500: "#2f52ff",
          600: "#1e40ff",
          700: "#1830d8",
          800: "#1828a8",
          900: "#172682",
        },
        sunbeam: {
          50: "#fff8e6",
          100: "#ffefc2",
          200: "#ffde84",
          300: "#ffc947",
          400: "#ffb020",
          500: "#f59307",
          600: "#d16f02",
          700: "#a75105",
          800: "#8a410c",
          900: "#75360f",
        },
        coral: {
          400: "#ff7a7c",
          500: "#ff5e5b",
          600: "#e83f3c",
        },
        lime: {
          300: "#d3f56b",
          400: "#b7e934",
          500: "#9bd41d",
        },
        magenta: {
          400: "#f26aa2",
          500: "#e94e77",
          600: "#c8335d",
        },
      },
      keyframes: {
        "blob-morph": {
          "0%, 100%": { borderRadius: "42% 58% 63% 37% / 46% 39% 61% 54%" },
          "25%": { borderRadius: "70% 30% 45% 55% / 58% 62% 38% 42%" },
          "50%": { borderRadius: "38% 62% 48% 52% / 60% 45% 55% 40%" },
          "75%": { borderRadius: "55% 45% 70% 30% / 42% 58% 42% 58%" },
        },
        "blob-morph-b": {
          "0%, 100%": { borderRadius: "63% 37% 38% 62% / 42% 63% 37% 58%" },
          "33%": { borderRadius: "40% 60% 66% 34% / 55% 48% 52% 45%" },
          "66%": { borderRadius: "58% 42% 30% 70% / 62% 38% 62% 38%" },
        },
        "icon-float": {
          "0%, 100%": { transform: "translateY(0) rotate(0)" },
          "50%": { transform: "translateY(-6px) rotate(-4deg)" },
        },
        "icon-wiggle": {
          "0%, 100%": { transform: "rotate(0)" },
          "25%": { transform: "rotate(-8deg)" },
          "75%": { transform: "rotate(8deg)" },
        },
        "icon-pop": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15) rotate(6deg)" },
          "100%": { transform: "scale(1) rotate(0)" },
        },
        "star-spin": {
          to: { transform: "rotate(360deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        "gradient-flow": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "marquee-slide": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "shine-sweep": {
          "0%": { transform: "translateX(-120%) skewX(-18deg)" },
          "100%": { transform: "translateX(220%) skewX(-18deg)" },
        },
      },
      animation: {
        "blob-morph": "blob-morph 18s ease-in-out infinite",
        "blob-morph-b": "blob-morph-b 22s ease-in-out infinite",
        "icon-float": "icon-float 4s ease-in-out infinite",
        "icon-wiggle": "icon-wiggle 1.4s ease-in-out",
        "icon-pop": "icon-pop 0.6s ease-out",
        "star-spin": "star-spin 9s linear infinite",
        "pulse-ring": "pulse-ring 2.6s cubic-bezier(0, 0, 0.2, 1) infinite",
        "gradient-flow": "gradient-flow 7s ease-in-out infinite",
        "marquee-slide": "marquee-slide 22s linear infinite",
        "shine-sweep": "shine-sweep 1.2s ease-out",
      },
      backgroundImage: {
        "mesh-warm":
          "radial-gradient(circle at 14% 20%, rgba(255,176,32,0.22), transparent 28%), radial-gradient(circle at 82% 22%, rgba(30,64,255,0.20), transparent 32%), radial-gradient(circle at 50% 82%, rgba(233,78,119,0.18), transparent 30%), radial-gradient(circle at 12% 88%, rgba(183,233,52,0.22), transparent 28%)",
        "mesh-dark":
          "radial-gradient(circle at 20% 30%, rgba(88,118,255,0.18), transparent 35%), radial-gradient(circle at 75% 15%, rgba(233,78,119,0.16), transparent 30%), radial-gradient(circle at 50% 80%, rgba(183,233,52,0.12), transparent 28%)",
        "glow-electric":
          "radial-gradient(ellipse at center, rgba(88,118,255,0.55), transparent 70%)",
        "glow-sunbeam":
          "radial-gradient(ellipse at center, rgba(255,176,32,0.55), transparent 70%)",
        "glow-coral":
          "radial-gradient(ellipse at center, rgba(255,94,91,0.55), transparent 70%)",
      },
      colors: {
        electric: {
          50: "#eef2ff",
          100: "#dbe3ff",
          200: "#b6c6ff",
          300: "#84a0ff",
          400: "#5876ff",
          500: "#2f52ff",
          600: "#1e40ff",
          700: "#1830d8",
          800: "#1828a8",
          900: "#172682",
        },
        sunbeam: {
          50: "#fff8e6",
          100: "#ffefc2",
          200: "#ffde84",
          300: "#ffc947",
          400: "#ffb020",
          500: "#f59307",
          600: "#d16f02",
          700: "#a75105",
          800: "#8a410c",
          900: "#75360f",
        },
        coral: {
          400: "#ff7a7c",
          500: "#ff5e5b",
          600: "#e83f3c",
        },
        lime: {
          300: "#d3f56b",
          400: "#b7e934",
          500: "#9bd41d",
        },
        magenta: {
          400: "#f26aa2",
          500: "#e94e77",
          600: "#c8335d",
        },
        glass: {
          light: "rgba(255,255,255,0.70)",
          dark: "rgba(12,18,40,0.65)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
