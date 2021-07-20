const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        test: /\.(less|css)$/i,
        use: [
          // 执行顺序 从下到上 从右到左
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader', // translates CSS into CommonJS
            options: {
              postcssOptions: {
                plugins: ['autoprefixer']
              }
            }
          },
          {
            loader: 'less-loader' // translates LESS into CSS
          }
        ]
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), new TerserPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
};
module.exports = merge(baseConfig, prodConfig);

