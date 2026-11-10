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
        navy: "#0b3d91",
        navy2: "#0a2f6e",
        navyDark: "#062453",
        navyDeep: "#041a3d",
        brandRed: "#e0231c",
        redDark: "#b91410",
        redSoft: "#fdeceb",
        sky: "#e9f2ff",
        sky2: "#f5f9ff",
        ink: "#16294d",
        muted: "#3d547a",
        line: "#d7e3f5",
        cardBorder: "#c9dbf6",
        whatsapp: "#25d366",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 10px 30px rgba(6,36,83,0.10)",
        cardLg: "0 22px 50px rgba(6,36,83,0.16)",
      },
      borderRadius: { card: "18px" },
    },
  },
  plugins: [],
};

export default config;
