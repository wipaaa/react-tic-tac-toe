const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    port: 8000,
  },
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        include: /src/,
        use: ['babel-loader'],
      },
    ],
  },
};
