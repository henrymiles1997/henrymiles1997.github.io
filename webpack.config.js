const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/js/webpackDist.js',

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  output: {
    filename: 'main.js',
    
  }
  
  
};
