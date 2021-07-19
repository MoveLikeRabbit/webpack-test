const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
// webpack 基于 node common.js 语法 （这里用 module.exports)
module.exports = {
  // 默认production 自动压缩文件
  mode: 'development',
  // 开发模式推荐 eval-cheap-module-source-map
  // 生产环境下 cheap-module-source-map  不显示源码
  // devtool: 'cheap-module-source-map',
  // 入口文件
  entry: {
    index: './src/index.js'
    // demo: './src/demo.js',
    // proxy: {
    //   api: 'local: 8080'
    // }
  },
  output: {
    // 自定义打包文件名
    // 多入口 通过占位符来实现
    filename: '[name].[hash:5].js',
    // 写绝对路径
    path: path.resolve(__dirname + '/dist')
    // publicPath: '' // 上线CDN
  },
  // webpack-dev-server 在编译之后不会写入到任何输出文件。而是将 bundle 文件保留在内存中，然后将它们 serve 到 server 中，就好像它们是挂载在 server 根路径上的真实文件一样。
  devServer: {
    // 定义服务访问目录
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /.js/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // presets: [
              //   [
              //     '@babel/preset-env',
              //     {
              //       // 必须同时设置core-js 3  默认2
              //       useBuiltIns: 'usage',
              //       corejs: 3
              //     }
              //   ]
              // ]

            }
          }
        ],
        exclude:/node_modules/

      },

      {
        test: /\.(png|jpe?g|gif|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:5].[ext]',
              outputPath: 'assets',
              limit: 2048
            }
          }
        ]
      },
      {
        test: /\.(less|css)$/i,
        use: [
          // 执行顺序 从下到上 从右到左
          {
            loader: 'style-loader' // 通过style标签将css注入到html页面
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // a webpack plugin to remove/clean your build floder(s)
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin()
  ]
};
