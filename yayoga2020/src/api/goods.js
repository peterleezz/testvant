import base from './base'

export default class goods extends base {
  static async index() {
    return await this.get(`api/mall/proxy/goods`)
  }
  static async index2(id, id2) {
    return await this.get(`api/mall/goods/${id}?recommend_id=${id2}`)
  }
}
