import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#8E87FA",
        "purple-primary": "#6D67D0",
        "purple-subtitle": "#C2BFF4",
      },
    },
  },
  plugins: [],
};
export default config;
