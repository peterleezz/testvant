import base from './base'
import Page from '../utils/Page'

import Cache from '../utils/Cache'

export default class util extends base {
  static async verify(params) {
    if (!Cache.isExpired('verify_code', 2)) {
      return Promise.reject('请稍后再试')
    }
    Cache.set('verify_code', {})
    const url = `api/common/code`
    // console.log('send sms')
    return await this.post(url, params)
  }
  static async shareInfo($params) {
    return await this.get('api/common/sharePic', $params)
  }
  static async newtips($params) {
    return await this.get('api/inyoga/newtips', $params)
  }

  static async seatPics() {
    return await this.get('api/services/inyoga/seatpics')
  }

  static async appointSuccess() {
    return await this.get('api/services/inyoga/appointSuccess')
  }
}
