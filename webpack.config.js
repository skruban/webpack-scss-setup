const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: 'dev/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'try',
      filename: 'index.html'
    })
  ]
};
