var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // 应用的入口
  entry: './main.js',
  // 编译打包后的输出
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  module: {
    // `loaders` 是需要用到的 loader 组成的数组
    // 这里只配置 vue-loader
    loaders: [{
      test: /\.vue$/, // 正则匹配所有以 `.vue` 结尾的文件
      loader: 'vue!eslint' // 对匹配到的文件使用何种 loader
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url',
      query: {
        // 低于该值则内联为 base64，单位是 byte
        limit: 10000,
        // 对于超过阈值的文件，定义命名规则
        name: '[name].[ext]?[hash]'
      }
    }]
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract("css")
    }
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
}
