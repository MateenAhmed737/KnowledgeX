/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        imb: "IBM Plex Sans",
      },
      colors: {
        primary: {
          100: "#FFF8F1",
          200: "#f0a85c",
          300: "#ee9c45",
          400: "#ec8f2d",
          500: "#EA8316",
          600: "#d37614",
          700: "#bb6912",
          800: "#a45c0f",
          900: "#8c4f0d",
          950: "#75420b",
        },
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
    backgroundImage: {
      "radial-gradient":
        "radial-gradient(at right top, rgba(234, 131, 22,0.3) 0%, rgba(242,181,115,0) 70%)",
    },
  },
  plugins: [],
};
