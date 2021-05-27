const path = require('path');

/* Overrwrite Create-react-app, add module aliasing. */
module.exports = {
  webpack: {
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      Assets: path.resolve(__dirname, 'src/assets'),
      Views: path.resolve(__dirname, 'src/page'),
      Sass: path.resolve(__dirname, 'src/sass'),
    },
  },
};
