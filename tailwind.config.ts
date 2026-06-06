// placeholder
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",
        card: "#111827",
        accent: "#06B6D4",
        success: "#22C55E",
        danger: "#EF4444"
      }
    }
  },
  plugins: []
};

export default config;