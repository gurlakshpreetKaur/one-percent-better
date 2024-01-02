import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "coffee": {
          "50": "#f9f1ec",
          "100": "#f3e2d8",
          "200": "#e7c5b1",
          "300": "#e1b69d",
          "400": "#dba88a",
          "500": "#d59976",
          "600": "#cf8b63",
          "700": "#c97c4f",
          "800": "#c36d3c",
          "900": "#b06336",
          "1000": "#754224",
          "1100": "#4e2c18"
        },
        "yerba-mate": {
          "50": "#dbdcd6",
          "100": "#c3c4ba",
          "200": "#abad9f",
          "300": "#939583",
          "400": "#878a75",
          "500": "#6c6e5e",
          "600": "#515346",
          "700": "#43453b",
          "800": "#36372f"
        },
        "silver": "#E8E3E0"
      }
    },
    fontFamily: {
      "noto": ["'Noto Serif'", "serif"]
    }
  },
  plugins: [],
}
export default config
