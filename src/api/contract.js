import base from './base'
import Page from './Page'
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
  static async rest(id, data) {
    return await this.post(`api/services/contract/rest/${id}`, data)
  }
  static async unrest(id) {
    return await this.post(`api/services/contract/unrest/${id}`)
  }
  static page(data) {
    return new Page('api/services/contracts', null, data)
  }
}
