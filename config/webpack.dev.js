const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// webpack 基于 node common.js 语法 （这里用 module.exports)
const devConfig = {
  mode: 'production',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    // 定义服务访问目录
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 9000,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
  ]
}
module.exports = merge(baseConfig, devConfig)

