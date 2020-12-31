import base from './base'
import Page from './Page'
export default class teachers

extends base {

  static page(data = { brand_id: 1000, transformer: 'detail' }) {
    return new Page('api/services/teachers', null, data)
  }

  static async index(data = { brand_id: 1000, transformer: 'detail' }) {
    return await this.get('api/services/teachers', data)
  }
  static async timefields(id, data = {}) {
    return await this.get(`api/services/teachers/${id}/timefields`, data)
  }
}
