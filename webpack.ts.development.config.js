const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/script/main.ts",
  output: {
    // 出力フォルダはgulpで指定
    filename: "main.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
