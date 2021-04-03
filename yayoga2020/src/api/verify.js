import base from './base'

export default class verify extends base {
  static async index(data) {
    return await this.post(`api/mall/verify`, data)
  }
}
