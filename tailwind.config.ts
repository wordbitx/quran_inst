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
        /* ONE navy, ONE red — sampled from the reference image with a
           colour picker: navy #00338C, red #D00000. Every navy token
           points at the same hex and every red token at the same hex —
           no second navy or second red anywhere. navySoft / sky /
           line / cardBorder are light TINTS of that one navy (same hue,
           mixed with white) for text on navy and pale surfaces; ink /
           muted are dark tints of the same hue for body text. cream is
           the warm off-white tint used for the sticky header. The only
           other colour anywhere is WhatsApp green, on the WhatsApp
           button only. NO orange. */
        navy: "#00338c",
        navy2: "#00338c",
        navyDark: "#00338c",
        navyDeep: "#00338c",
        topbar: "#00338c",
        navySoft: "#c3d7f5",
        brandRed: "#d00000",
        redDark: "#d00000",
        redSoft: "#fdecec",
        cream: "#fdf6ec",
        sky: "#e8f0fd",
        sky2: "#f4f8fe",
        ink: "#0a2a5e",
        muted: "#33517e",
        line: "#d3e0f7",
        cardBorder: "#c3d5f5",
        whatsapp: "#25d366",
      },
      fontFamily: {
        display: ["Lexend Deca", "Noto Sans", "system-ui", "sans-serif"],
        sans: [
          "Noto Sans",
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
        card: "0 10px 30px rgba(0,51,140,0.10)",
        cardLg: "0 22px 50px rgba(0,51,140,0.16)",
      },
      borderRadius: { card: "18px" },
    },
  },
  plugins: [],
};

export default config;
