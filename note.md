
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
