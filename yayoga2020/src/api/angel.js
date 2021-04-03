import base from './base'
import Page from '../utils/Page'
export default class angel extends base {
  static async recommends(data) {
    return await this.get(`api/inyoga/inangel-recommends`, data)
  }

  static async consumers() {
    return await this.get(`api/inyoga/inangel-consumers`)
  }

  static async history(data) {
    return await this.get(`api/inyoga/lottery-histories`, data)
  }
}
