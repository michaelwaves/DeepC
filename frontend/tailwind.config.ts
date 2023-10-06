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
        p:{
          1:"#55090D",
          2:"#B00E16",
          3:"#ef1620",
          4:"#EA5E65",
          5:"#F0C1C3",
        },
        s:{
          1:"#6B6B00",
          2:"#BEBE00",
          3:"#ffff00",
          4:"#F8F865",
          5:"#F3F3B4",
        },
        
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
