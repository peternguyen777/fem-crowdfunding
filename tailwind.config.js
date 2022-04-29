module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        commissioner: ["Commissioner", "sans-serif"],
      },
      screens: {
        lg: "1440px",
      },
      colors: {
        "button-nonselect": "#3CB3AB",
        "button-select": "#147A73",
        "p-color": "#7A7A7A",
      },
      fontSize: {
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
