module.exports = {
  darkMode: "class",
  content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070d",
          900: "#0b0f1a",
          800: "#111827",
        },
      },
      boxShadow: {
        focus: "0px 0px 30px 10px #0ff",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [],
}
