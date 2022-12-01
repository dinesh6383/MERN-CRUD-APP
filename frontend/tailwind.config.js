/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js,jsx}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1200px" },
      lg: { max: " 991px" },
      md: { max: "767px" },
      sm: { max: "550px" },
      xsm: { max: "425px" },
    },
    darkMode: ["class", '[data-mode="dark"]'],
  },
  plugins: [],
};
