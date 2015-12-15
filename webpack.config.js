'use strict';

// modules /////////////////////////////////////////////////////////////////////////////////////////////////////////////
var webpack = require('webpack');
var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

// pathes //////////////////////////////////////////////////////////////////////////////////////////////////////////////
var srcPath = path.resolve(__dirname, 'src', 'app.js');
var dstPath = path.resolve(__dirname, 'web', 'js');

// vars ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var nodeEnv = process.env.NODE_ENV || 'development';
var apiUrl = process.env.apiUrl || '';

// the base config /////////////////////////////////////////////////////////////////////////////////////////////////////
var config = {
  entry: srcPath,
  output: {
    path: dstPath,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    //new webpack.DefinePlugin({
    //  'process.env': {
    //    'NODE_ENV': JSON.stringify(nodeEnv),
    //    'appversion': JSON.stringify(require('./package.json').version),
    //    'apiUrl': JSON.stringify(apiUrl)
    //  }
    //}),
    //new ngAnnotatePlugin({add: true}),
    new webpack.optimize.UglifyJsPlugin(
      {compress: {warnings: false}}
    ),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};

// environment switch //////////////////////////////////////////////////////////////////////////////////////////////////
switch (nodeEnv) {
  case 'development':
  case 'test':
    config.devtool = 'source-map';
    break;
  case 'staging':
    config.devtool = 'cheap-module-source-map';
    break;
  case 'production':
    config.devtool = 'cheap-module-source-map';
    break;
  default:
    console.error('No task for environment:', nodeEnv);
    process.exit(1);
}

module.exports = config;
