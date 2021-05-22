const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    vendor: path.resolve(__dirname, './src/vendor.js'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
