
/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  colors: {
    primary: "#00B4D8",
    secondary: "#0F3D3E",
    accent: "#2DC653",
    dark: "#081219",
    panel: "#0F172A",
  },
  plugins: [],
}