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
    module: 'empty',
    fsevents: 'empty'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 3000
  }
};
