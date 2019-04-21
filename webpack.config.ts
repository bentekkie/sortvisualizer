import CopyWebpackPlugin from "copy-webpack-plugin";
import WasmPackPlugin from  "@wasm-tool/wasm-pack-plugin";
import * as path from "path";
import webpack from "webpack";

const config : webpack.Configuration = {
  entry: "./src/bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  devtool: 'inline-source-map',
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(['index.html','index.css']),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "crate"),
    })
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
export default config;
