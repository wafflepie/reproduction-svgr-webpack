module.exports = {
  entry: "./index.js",
  mode: "development",
  target: "node",
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: "url-loader",
      },
    ],
  },
};
