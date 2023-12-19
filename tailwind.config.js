/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "767px" },
      md: { max: "1023px" },
      lg: { max: "1279px" },
      xl: { max: "1439px" },
    },
    container: {
      center: true,
      padding: {
        sm: "15px",
      },
    },
    fontSize: {
      h1: ["70px", "80px"],
      h2: ["40px", "46px"],
      h3: ["32", "36px"],
      h4: ["28px", "32px"],
      h5: ["24px", "30px"],
      h6: ["20px", "26px"],
      p: ["16px", "24px"],
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
