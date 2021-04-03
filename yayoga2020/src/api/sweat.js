import base from './base'
import Page from '../utils/Page'
export default class sweat extends base {
  static page(data) {
    return new Page('api/services/inyoga/sweat', null, data)
  }
  static async update(id, data) {
    return await this.put(`api/services/inyoga/sweat/${id}`, data)
  }

  static async show(id, data = {}) {
   return await this.get(`api/services/inyoga/sweat/${id}`, data) 
  }
}
