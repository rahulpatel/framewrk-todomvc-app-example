'use strict';

var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: path.join(__dirname, 'js', 'index.js'),

  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'js')
  },

  module: {
    loaders: [
      {
        test: /jsx?$/,
        include: path.join(__dirname, 'js'),
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  resolve: {
    root: path.join(__dirname, 'js'),
    extensions: ['', '.js', '.jsx']
  }
};
