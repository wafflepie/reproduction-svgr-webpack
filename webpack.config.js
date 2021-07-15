module.exports = {
  entry: "./index.js",
  mode: "development",
  target: "node",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset/resource",
      },
    ],
  },
};
