const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader']}
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })]
}

if (process.env.NODE_ENV = 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {   // set NODE_ENV to production, thus telling React to optimize the build
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)  // should be === 'production'
      }
    }),
    new webpack.optimize.UglifyJsPlugin()   // uglify & minify our code
  )
}

module.exports = config
