import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;


