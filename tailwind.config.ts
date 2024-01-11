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
        "background-card": "#8E87FA",
        "background-sub-card": "#7e79e0",
        "purple-primary": "#6D67D0",
        "purple-subtitle": "#C2BFF4",
        label: "#C2BFF4",
      },
    },
  },
  plugins: [],
};
export default config;
