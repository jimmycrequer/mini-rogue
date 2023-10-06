import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        knight: "#055C74",
        "knight-skill": "#78B3A3",
        disabled: "#C1C1C1",
      },
    },
  },
  plugins: [],
};

export default config;
