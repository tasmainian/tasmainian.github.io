module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {},
    boxShadow: {
      focus: "0px 0px 30px 10px #0ff",
    },
    listStyleType: {
      square: "square",
    },
  },
  variants: {},
  plugins: [],
}
