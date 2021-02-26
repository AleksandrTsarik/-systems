const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(jpg|jpeg|png|svg)/, 
        use: ["file-loader"]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
      }
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({template:"./src/index.html"}),
    new CleanWebpackPlugin()
  ]
};