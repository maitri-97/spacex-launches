/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      blue: "#004fff",
      green: colors.green,
      red: colors.red
    },
    screens: {
      xl: { max: "1439px" },
      lg: { max: "1279px" },
      md: { max: "1023px" },
      sm: { max: "767px" },
    },
    container: {
      center: true,
      screens: {
        DEFAULT: "1320px",
        xl: { max: "1140px" },
        lg: { max: "960px" },
        md: { max: "720px" },
        sm: { max: "540px" },
      },
      padding: {
        sm: "15px",
      },
    },
    fontSize: {
      h1: ["70px", "80px"],
      h2: ["40px", "46px"],
      h3: ["32px", "36px"],
      h4: ["28px", "32px"],
      h5: ["24px", "30px"],
      h6: ["20px", "26px"],
      p: ["16px", "24px"],
      sm: ["14px", "18px"],
    },
    extend: {
      // fontSize: {
      // },
    },
    fontFamily: {
      primary: ["Poppings-Regular", "serif"],
      secondary: ["Return-Space", "serif"],
    },
    variants: {
      height: ["responsive"],
    },
  },
  plugins: [],
};
