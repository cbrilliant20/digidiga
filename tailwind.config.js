module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: "#A5410F",
        darkGray: "#506269",
        lightGray: "#848484",
        gold: "#D5963D",
        green: "#131E07",
        offWhite: "#efddd4",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat, sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
