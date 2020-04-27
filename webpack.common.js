const path = require("path");

// CSSをJSにバンドルせずに出力するため
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// HTMLを生成
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: outputPath,
    filename: "bundle.js?[hash]",
  },
  resolve: {
    modules: ["./src", "./node_modules/"],
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: [/\.css$/, /\.scss$/],
        use: [MiniCssExtractPlugin.loader, "css-loader?modules", "postcss-loader","sass-loader"],
      },
      {
        test: [/\.ts$/, /\.tsx$/, /\.js$/],
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      publicPath: "dist",
      filename: "app.css",
    }),
    new HtmlWebpackPlugin({
      publicPath: 'dist',
      filename: 'index.html',
      template: 'public/index.html',
    })
  ],
};
