import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      White: "hsl(0,0%,100%)",
      Red: "hsl(14, 86%, 42%)",
      Green: "hsl(159, 69%, 38%)",
      "Rose-50": "hsl(20, 50%, 98%)",
      "Rose-100": "hsl(13, 31%, 94%)",
      "Rose-300": "hsl(14, 25%, 72%)",
      "Rose-400": "hsl(7, 20%, 60%)",
      "Rose-500": "hsl(12, 20%, 44%)",
      "Rose-900": "hsl(14, 65%, 9%)",
      "modal-bg": "rgb(126,125,123)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
