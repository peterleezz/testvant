import base from './base'
import Page from '../utils/Page'
export default class contract extends base {
  static async index(data) {
    return await this.get(`api/services/contracts`, data)
  }
  static async detail(id, data) {
    return await this.get(`api/services/contracts/${id}`, data)
  }
  static async update(id, data) {
    return await this.put(`api/services/contracts/${id}`, data)
  }

  static page(data) {
    return new Page('api/services/contracts', null, data)
  }
}
