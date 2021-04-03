import base from './base'
const url = `api/mall/carts`

export default class cars extends base {
  static async index(dats) {
    return await this.post(url, data)
  }
  static async creat() {
    return await this.get(url)
  }
  static async update(data) {
    return await this.put(url, data)
  }
  static async detele(id) {
    return await this.delete(`url/${id}`, )
  }
}
