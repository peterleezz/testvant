import wepy from 'wepy'
import Tips from './Tips'
import { serverUrl } from './Config'
 
const app = getApp()

// HTTP工具类
export default class http {
  static async request(method, u, data) {
    let url = u
    if (!u.startsWith('http')) url = serverUrl + url
    const param = {
      url,
      method: method,
      data: data
    }
    Tips.loading()
    const res = await wepy.request(param)
    Tips.loaded()
    if (this.isSuccess(res)) {
      if (res.statusCode == 201 && !res.data) return res.header.Location
      return res.data
    } else {
      console.error(method, url, data, res)
      let error = this.requestException(res)
      if (u != 'api/services/errors') this.reportError(error)
      throw error
    }
  }

  /**
   * 判断请求是否成功
   */
  static isSuccess(res) {
    const wxCode = res.statusCode
    // 微信请求错误
    if (wxCode >= 200 && wxCode < 300) {
      if (res.statusCode == 201 && res.data == '') {
        res.data = res.header.Location
      }
      return true
    }
    return false
  }

  /**
   * 异常
   */

  static async reportError(error) {
    let deviceinfo = await wepy.getSystemInfo()
    let token = wepy.$instance.globalData.token
    let data = { error, token, ...deviceinfo }
    this.post('api/services/errors', data)
  }
  static requestException(res) {
    if (res.statusCode == 401) res.data.message = 'Unauthorized'
    let error = ''
    if (res.data.errors) {
      for (let key in res.data.errors) {
        error += res.data.errors[key]
        return error
      }
    } else {
      error = res.data.message
    }

    return error
  }

  static get(url, data) {
    return this.request('GET', url, data)
  }

  static put(url, data) {
    return this.request('PUT', url, data)
  }

  static post(url, data) {
    return this.request('POST', url, data)
  }

  static patch(url, data) {
    return this.request('PATCH', url, data)
  }

  static delete(url, data) {
    return this.request('DELETE', url, data)
  }

  static async uploadFile(file) {
    const param = {
      url: serverUrl + url,
      filePath: file,
      name: 'file'
    }
    Tips.loading()
    const res = await wepy.uploadFile(param)
    Tips.loaded()
    if (this.isSuccess(res)) {
      let ret = JSON.parse(res.data)
      return ret.data
    } else {
      throw this.requestException(res)
    }
  }
}
