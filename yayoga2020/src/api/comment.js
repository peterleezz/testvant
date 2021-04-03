import base from './base'
import Page from '../utils/Page'
const url = 'api/common/comments'

export default class comment extends base {
  /**
   * 分页方法
   */
  static page(data) {
    return new Page(url, this.format.bind(this), data)
  }

  static async add(data = {}) {
    return await this.post(url, data)
  }

  static format(data) {
    return data
  }
}
