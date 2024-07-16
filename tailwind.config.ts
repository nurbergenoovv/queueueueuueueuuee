import type { Config } from "tailwindcss"
import daisyui from "daisyui"

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
      colors: {
        main: '#F13446',
        secondary: '#008742',
        grayyy: '#8A8A8A',
        blackkk: '#383F45',
        whiteee: '#F2F2F2'
      }
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["bumblebee"]
  }
}

export default config
