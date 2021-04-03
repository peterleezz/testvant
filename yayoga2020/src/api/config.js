import wepy from 'wepy'

export default class config {
  static getConfig(key) {
    return wepy.$instance.globalData.config[key]
  }

  static setConfig(key, value) {
    let config = wepy.$instance.globalData.config
    config[key] = value
    wepy.setStorageSync('config', config)
  }

  static removeConfig(key) {
    let config = wepy.$instance.globalData.config
    config[key] = null
    wepy.setStorageSync('config', config)
  }
}
