import base from './base'
import Page from '../utils/Page'

const url = 'api/services/yaascores'
export default class YaaScore extends base {
  static page(data) {
    return new Page(url, null, data)
  }

  static ranking(data) {
    return this.get(`${url}/rank`, { include: 'member', ...data })
  }

  static mineranking(data) {
    return this.get(`${url}/ranksort`, data)
  }
}
