var webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: './app/index.js',
  output: {
    filename: './bundle/bundle.js',
    sourceMapFilename: './bundle/bundle.js.map'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'resolve-url', 'sass?sourceMap']
    }, {
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
      loader: 'file?name=bundle/[hash].[ext]'
    }, {
      test: /\.json$/,
      loaders: ['json']
    }]
  }
};
