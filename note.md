
source
---------------
HMR: hot module replacement
使用webpack-dev-server 作为服务器启动
devServer 配置中 hot: true
js模块中农加module.hot.accept 增加hmr代码

-------------
babel
js的编译器
npm install @babel/core @babel/preset-env  babel-loader

已经使用了@babel/preset-env es6+语法转换
标准引入的语法： 箭头函数 let const 可以转换
标准引入的全局变了，部分原生对象新增的原型链上的方法， 不可以 Promise  Symbol set polyfill

@bable/polyfill 全局变了的形式将方法注入，开发类库，UI组件时，全局变了的污染
@babel/plugin-transform-runtime
@babel/runtime-corejs3

---------------------------------------------------------
 treeShaking  用来移除 未引用代码dead-code 它依赖于 ES2015 模块语法的 静态结构 特性，例如 import 和 export

__________________________
webpack.config.js 区分 dev pro
development
    devServer
    sourceMap
    proxy

production
    treeshaking
    代码压缩
    提取公共代码

common
    entry

util
    webpack-merge

———————————————————————————————
打包优化
    1. 入口配置 entry多入口 webpack.ProvidePlugin
    2. 抽取公共代码 splitChunksPlugins commonChunksPlugin
    3. 动态加载：按需加载，懒加载 @babel/plugin-syntax-dynamic-import

---------------------------------------------------------
css 文件代码分割  MiniCssExtractPlugin
optimize-css-assets-webpack-plugin
css-minimizer-webpack-plugin  webpack 5
配置css 代码分割，因为配置了optimization 要注意影响到了js代码压缩，需要手动配置， terser-webpack-plugin