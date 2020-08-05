var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

var sourcePath = path.join(__dirname, 'src');
var isProduction = process.argv.indexOf('-p') > -1;

console.log(`isProduction ${isProduction}`);
// 'react-hot-loader/patch',
// 'webpack-hot-middleware/client?quiet=true',
// './index.tsx'
// ],

module.exports = {
  context: sourcePath,
  devtool: false,// isProduction ? 'hidden-source-map' : 'cheap-module-eval-source-map',
  // entry: {
  //   main: ['./index.tsx', 'react-hot-loader/patch', 'webpack-hot-middleware/client?quiet=true'],    'webpack/hot/only-dev-server', 
  //      'react-hot-loader/patch', },
  entry: [
    './index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 
          {
            loader: 'babel-loader'
          }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'assets/template.html'
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
