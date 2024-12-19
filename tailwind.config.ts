import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        load: {
          '0%': { opacity: '0', transform : 'translateY(20)' },
          '50%' : { opacity : '0.5'},
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        btnload: {
          '0%': { opacity: '0', transform : 'translateX(40)' },
          '50%' : { opacity : '0.5'},
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        "load-text" : "load 1.5s linear",
        "load-btn" : "btnload 1.5s linear",
      },
      backgroundImage: {
        primary: "linear-gradient(to right, #FD6F00, #E46400)",
      },
      textColor: {
        primary: "#FD6F00", // Define solid colors for text
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
