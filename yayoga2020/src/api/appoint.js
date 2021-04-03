import base from './base'
import Page from '../utils/Page'
export default class appoint extends base {
  static async store(data) {
    return await this.post(`api/services/appoints`, data)
  }

  static async update(id, data) {
    return await this.put(`api/services/appoints/${id}`, data)
  }
  static async del(id) {
    return await this.delete(`api/services/appoints/${id}`)
  }

  static page(data) {
    return new Page('api/services/appoints', null, data)
  }

  static async index(data) {
    return await this.get('api/services/appoints', data)
  }

  static async confirm() {
    return await this.get('api/inyoga/confirms/appoint')
  }
}
