import base from './base'

export default class coupons extends base {
  static async index() {
    return await this.get(`api/mall/coupons`)
  }
}
