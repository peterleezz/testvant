const path = require('path');
var prod = process.env.NODE_ENV === 'production';
const DefinePlugin = require('@wepy/plugin-define');

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  static: ['static'],
  build: {},
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      'vant': path.join(__dirname, 'node_modules/@vant/weapp/dist'),
      // 'vant': path.join(__dirname, 'src/components/vant'),
      'store': path.join(__dirname, 'src/store'),
      'mixin': path.join(__dirname, 'src/mixins'),
      'event$': path.join(__dirname, 'src/common/eventHub.js'),
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    babel: {
      sourceMap: true,
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@wepy/babel-plugin-import-regenerator',
        ["@babel/plugin-proposal-class-properties", { "loose": false }],
      ]
    }
  },
  plugins: [
    DefinePlugin({
      BASE_URL: prod ? JSON.stringify('https://xcx2018.50yoga.cn/') : JSON.stringify('https://xcx2018.50yoga.cn/')
    })
  ],
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}
