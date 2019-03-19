let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: 'dev/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  node: {
    fs: 'empty',
    module: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: './build/index.html'
    })
  ],
  devServer: { contentBase: path.join(__dirname, 'dist'), compress: true, port: 9000 }
};
