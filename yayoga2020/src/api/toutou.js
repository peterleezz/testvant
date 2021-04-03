import base from './base'
import Page from '../utils/Page'

const url = 'api/inyoga/activity/toutou'
export default class Toutou extends base {
  static async show(id = 0, data = {}) {
    return await this.get(`${url}/${id}`, data)
  }

  static async user(data) {
    return await this.get(`api/inyoga/activity/user/toutou`, data)
  }

  static async store(data) {
    return await this.post(url, data)
  }

  static async cards(data) {
    return await this.get('api/inyoga/activity/toutoucards')
  }

  static async mylove() {
    return await this.get('api/inyoga/activity/toutoumylove', { include: 'xcxuser' })
  }
}
