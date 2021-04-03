export default class Decode {
  static options = options => {
    let { id, recommendId, channelId, scene, ext } = options
    let newScene = decodeURIComponent(scene)
    if (newScene !== undefined && newScene !== 'undefined' && newScene !== '') {
      let qrcode = newScene.split(',')
      id = qrcode[0]
      recommendId = qrcode[1]
      channelId = qrcode[2]
      ext = qrcode[3]
    }
    let cid = wx.getStorageSync('channelId')
    let rid = wx.getStorageSync('recommendId')
    if (!cid) {
      wx.setStorageSync('channelId', channelId)
    } else {
      channelId = cid
    }
    if (!rid) {
      wx.setStorageSync('recommendId', recommendId)
    }
    // else {
    //   recommendId = rid
    // }
    console.log({ id, recommendId, channelId, ext })
    return { id, recommendId, channelId, ext }
  }
}
