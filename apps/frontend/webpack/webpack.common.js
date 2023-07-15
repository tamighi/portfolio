const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  resolve: {
    extensions: [".tsx", ".js", ".ts"],
    modules: [path.resolve(__dirname, "..", "src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(png|jpg|gif|pdf)$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "assets", to: "" }],
    }),
  ],
};
