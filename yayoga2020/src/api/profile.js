import base from './base'

export default class profile extends base {
  static async index(id, data) {
    return await this.get(`api/mall/profile/${id}`, data)
  }
}
