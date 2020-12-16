// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  lintOnSave: false,
  // configureWebpack: {},
  // devServer: { // 环境配置
  //   host: '0.0.0.0',
  //   public: '192.168.43.234:8080',
  //   port: '8080',
  //   https: false,
  //   disableHostCheck: true,
  //   open: false,
  // },
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.svg/)
      .include.add(dir).end() //包含icons目录
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()
      .use('svgo-loader').loader('svgo-loader')
      .tap(options => ({...options, plugins: [{removeAttrs: {attr: 'fill'}}]})).end()
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) //其他svg loader排除icons目录
  }

}

