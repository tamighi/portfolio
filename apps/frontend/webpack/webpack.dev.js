const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  devServer: {
    allowedHosts: "all",
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
};
