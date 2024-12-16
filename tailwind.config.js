/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    flexBasis: {
      "1/7": "14.2857143%",
      "2/7": "28.5714286%",
      "3/7": "42.8571429%",
      "4/7": "57.1428571%",
      "5/7": "71.4285714%",
      "6/7": "85.7142857%",
    },
  },
  plugins: [],
};
