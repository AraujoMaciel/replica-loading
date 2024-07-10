import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./componentes/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [{
    pattern: /^border-/,
    variants: ['sm','md','lg','xl','2xl','3xl']
}],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'roxo':'#673bb7',
        'roxo2':'#442779',
        'ciano':'#14cebe',
        'lilas':'#8F52FF',
      }
    },
  },
  plugins: [],
};
export default config;
