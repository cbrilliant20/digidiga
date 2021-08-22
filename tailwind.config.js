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
        green: "#20320D",
        offWhite: "#efddd4",
        whiteGold:
          "linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(213,150,61,1) 50%);",
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
