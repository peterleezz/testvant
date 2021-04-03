const env = 'production'
// const env = 'development'
// const env = 'pre'
module.exports = {
  env,
  app: 'ya',
  authLogo: 'http://sci.50yoga.cn/pics/2020/yayoga.jpg',
  appName: '呀瑜伽',
  serverUrl: 'https://xcx2018.50yoga.cn/',
 
}

if (env === 'development') {
  module.exports.serverUrl = 'http://sci2018.test/'
}
 