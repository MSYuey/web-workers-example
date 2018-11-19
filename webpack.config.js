const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, "src/app.js"),
  resolve: {
    extensions: [".js", ".ts"]
  },
  output: {
    filename: "app.js",
    publicPath: "/build/",
    path: path.join(__dirname, "www/build/")
  },
  devServer: {
    contentBase: 'www',
    port: 3000
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
  ],
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        exclude: /node_modules/,
        use: [
          { 
            loader: 'awesome-typescript-loader',
          },
        ]
      }
    ]
  }
};
