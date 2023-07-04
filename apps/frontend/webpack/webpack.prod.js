const path = require("path");

module.exports = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "[name].[contenthash].bundle.js",
    clean: true,
    publicPath: "/",
  },
};
