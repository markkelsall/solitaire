const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      green: colors.green
    },
    screens: {
      md: "768px",
      lg: "1024px"
    },
    extend: {}
  },
  variants: {},
  plugins: []
};
