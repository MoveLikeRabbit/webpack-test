const path = require('path');

// webpack 基于 node common.js 语法 （这里用 module.exports)
module.exports = {
  // 默认production 自动压缩文件
  mode: 'production',
  // 入口文件
  entry: './src/index.js',
  output: {
    // 自定义打包文件名
    filename: 'index.js',
    // 写绝对路径
    path: path.resolve(__dirname + '/dist')
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|ttf)$/i,
        use: [
          { loader: 'file-loader' },
        ]
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  }

};