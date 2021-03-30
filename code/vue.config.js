const path = require('path')
module.exports = {
  devServer: {
    port: 8080 // 端口号
  },
  runtimeCompiler: true,
  productionSourceMap: false,
  publicPath: './',
  outputDir: path.resolve(__dirname, '../dist'),
  lintOnSave: true //是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
}
