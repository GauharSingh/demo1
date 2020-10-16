const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//console.log(__dirname);

module.exports = {
  mode: "development",
  entry: {
    app: "./src/app.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(path.resolve(__dirname, "."), "/", "index.html"),
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
  },
};
