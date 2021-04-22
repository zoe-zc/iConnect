const path = require('path')
const pxtorem = require('postcss-pxtorem')
const tailwindcss = require('tailwindcss')

module.exports = {
  devServer: {
    port: 8080 // 端口号
  },
  runtimeCompiler: true,
  productionSourceMap: false,
  publicPath: './',
  outputDir: path.resolve(__dirname, '../dist'),
  lintOnSave: true, //是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
  css: {
    loaderOptions: {
      sass: {
        // @是src的别名
        data: ` @import "@/assets/style/base.scss";`
      },
      postcss: {
        plugins: [
          tailwindcss,
          // pc端
          pxtorem({
            // 所有rootValue应该设置位置设计稿宽的1/10
            rootValue: 144,
            // 配置不要转换的样式资源
            exclude: /node_modules\/vant|mobile/i, // 排除mobile和vant库
            propList: ['*', '!border'], // 配置要转换的css属性 *表示所有
            unitPrecision: 3, //保留rem小数点多少位
            selectorBlackList: ['.van-'], // 排除移动端使用了vant库
            minPixelValue: 1
          }),
          // // // mobile端
          // pxtorem({
          //   rootValue: 100,
          //   exclude: /node_modules\/element-ui/i,
          //   propList: ['*', '!border'],
          //   unitPrecision: 3, //保留rem小数点多少位
          //   minPixelValue: 12, // 设置要替换的最小像素值(1px会被转rem)。 默认 0
          //   selectorBlackList: ['.el-'] // 排除移动端使用了element-ui库
          // })
        ]
      }
    }
  }
}
