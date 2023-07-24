/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#070707",
      white: "#fdfdfd",
      gray: "#2c2d2c",
      yellow: "#c0bc3f",
      green: "#50af52",
      greenShade: "#f1f9ee",
      darkGreen: "#387b3a",
    },
    fontFamily: {
      sans: ["PT Sans", " sans-serif"],
      serif: ["PT Serif", "serif"],
      roboto: ["Roboto Serif", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
