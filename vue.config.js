const webpack = require("webpack");
module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    disableHostCheck: true
  }
  // configureWebpack: {
  //   module: {
  //     rules: [
  //       {
  //         test: /config.*config\.js$/,
  //         use: [
  //           {
  //             loader: 'file-loader',
  //             options: {
  //               name: 'config.js'
  //             },
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // }
};
