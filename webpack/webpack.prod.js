const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "[name].[contenthash].bundle.js",
    clean: true,
    publicPath: "/",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
};
