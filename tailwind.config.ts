import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-blue': '#022738r',
        'light-blue': '#1b5366;',
        'white': '#ffffff',
      },
    },
  },
  plugins: [],
};
export default config;
