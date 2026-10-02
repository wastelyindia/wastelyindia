/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },

    extend: {
      colors: {
        wastely: {
          deep: "#073B5C",
          "blue-deep": "#0B4F7A",
          blue: "#0E76A8",
          "blue-light": "#1E7FB8",
          cyan: "#2FB4CE",
          "cyan-light": "#3BB8D9",

          bg: "#FFFFFF",
          "bg-soft": "#F3F8FA",

          ink: "#0B2B3A",
          sub: "#5D7A87",
          line: "#E3EDF1",
        },
      },

      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        "display-xl": [
          "3.4rem",
          {
            lineHeight: "1.1",
            fontWeight: "700",
          },
        ],

        "display-lg": [
          "3rem",
          {
            lineHeight: "1.1",
            fontWeight: "700",
          },
        ],

        "display-md": [
          "2.5rem",
          {
            lineHeight: "1.15",
            fontWeight: "700",
          },
        ],

        "section-title": [
          "2rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],

        "card-title": [
          "1.1rem",
          {
            lineHeight: "1.35",
            fontWeight: "700",
          },
        ],
      },

      maxWidth: {
        "wastely": "1280px",
      },

      spacing: {
        "section-sm": "4rem",
        "section-md": "5rem",
        "section-lg": "7rem",
      },

      borderRadius: {
        wastely: "3px",
      },

      boxShadow: {
        none: "none",
        subtle: "0 1px 3px rgba(7, 59, 92, 0.06)",
      },

      backgroundImage: {
        "wastely-gradient":
          "linear-gradient(135deg, #0E76A8 0%, #2FB4CE 100%)",

        "wastely-gradient-dark":
          "linear-gradient(135deg, #073B5C 0%, #0B4F7A 100%)",
      },
    },
  },

  plugins: [],
};

