/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#066a9c",
      secondary: "#081d35",
      bg: "#fcfcfe",
      black: "#000000",
      white: "#ffffff",
      dark1: "#212529",
      dark2: "#6c747d",
      dark3: "#70777d",
      light1: "#e9ecef",
    },
    fontFamily: {
      sans: "Readex Pro",
    },
    extend: {
      boxShadow: {
        shadow: "0px 0px 20px 5px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
