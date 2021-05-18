const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    vendor: path.resolve(__dirname, './src/vendor.js'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
