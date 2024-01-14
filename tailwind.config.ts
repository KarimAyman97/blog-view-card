import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        fig: ["var(--font-fig-tree)"],
      },
      colors: {
        primary: "#f4d04e",
        white: "#ffffff",
        grey: "#808080",
        black: "#121212",
      },
      fontSize: {
        base: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
