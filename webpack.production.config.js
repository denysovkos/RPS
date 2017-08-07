const path = require('path');
const webpack = require('webpack');
const del = require('del');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

class CleanPlugin {
  constructor(options) {
    this.options = options;
  }

  apply() {
    del.sync(this.options.files);
  }
}

module.exports = {
  entry: './frontend/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.min.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'frontend/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CleanPlugin({
      files: ['dist/*'],
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin('style.css'),
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'frontend'),
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
      loader: 'file-loader'
    }],
  },
};
