import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "orchidea-pro": ["Orchidea Pro", "sans-serif"],
        inter: ["Inter", "san-serif"],
        italianno: ["Italianno", "cursive"],
      },
      colors: {
        terracotta: "#c26e5f",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
