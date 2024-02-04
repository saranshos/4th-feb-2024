const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  target: "web",
  devServer: {
    port: 3002,
    static: ["./public"],
    hot: true,
    open: true,
    liveReload: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
};
