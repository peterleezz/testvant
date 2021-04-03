import base from './base'

export default class Order extends base {
  static async pay(order_id) {
    return await this.post(`api/common/pay`, { order_id })
  }

  static async del(id) {
    return await this.delete(`api/common/orders/${id}`)
  }

  static async store(data = {}) {
    return await this.post(`api/common/orders`, data)
  }

  static async list(data) {
    return await this.get(`api/common/orders`, data)
  }
}
