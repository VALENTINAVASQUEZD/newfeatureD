import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': {
        '50': '#fcfde7',
        '100': '#fafcc5',
        '200': '#f8fa8e',
        '300': '#f6f24e',
        '400': '#f1e41e',
        '500': '#e1cb11',
        '600': '#c2a00c',
        '700': '#9b740d',
        '800': '#805c13',
        '900': '#6d4b16',
        '950': '#402808',
    },
    
    },
    
      },
    },
  plugins: [],
};
export default config;
