import base from './base'
import Page from '../utils/Page'

export default class article extends base {
  /**
   * 分页方法
   */
  static page() {
    const url = `api/services/articles`
    return new Page(url, null, { include: 'item' })
  }

  static async read(id) {
    return await this.post(`api/inyoga/articles/${id}/read`)
  }
}
