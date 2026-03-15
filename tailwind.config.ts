import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#06070B",
        panel: "#0E1117",
        line: "#1C2333",
        ink: "#E8ECF8",
        muted: "#93A0BD",
        blueglow: "#4F6BFF",
        tealglow: "#2DD4BF",
        violetglow: "#6D5EF8"
      },
      boxShadow: {
        panel: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.45)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
