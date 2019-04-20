const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./src/bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  devtool: 'inline-source-map',
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(['index.html','index.css'])
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      { test:/\.css$/, use:['style-loader','css-loader'] }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.wasm', '.css' ]
  },
  devServer: {
    disableHostCheck: true
  }
};
