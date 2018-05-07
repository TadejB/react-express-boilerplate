const HtmlWebPackPlugin =  require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/build'),
    publicPath: '/build/'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './app/build',
    watchContentBase: true,
    clientLogLevel: 'none',
    host: '0.0.0.0'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
