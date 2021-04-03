import wepy from 'wepy'
import http from '../utils/Http'

export default class base {
  static get = http.get.bind(http)
  static put = http.put.bind(http)
  static post = http.post.bind(http)
  static delete = http.delete.bind(http)
  static uploadFile = http.uploadFile.bind(http)

  // static url = ''
  // static page(data) {
  //   return new Page(self::url, this.format.bind(this), data)
  // }
  // static async store(data) {
  //   return await this.post(self::url, data)
  // }

  // static async index(data = {}) {
  //   return await this.get(self::url, data)
  // }

  // static async show(id, data = {}) {
  //   let rsp = await this.get(self::url + '/' + id, data)
  //   rsp.data = this.format(rsp.data)
  //   return rsp
  // }
  // static async update(id, data) {
  //   return await this.put(self::url + '/' + id, data)
  // }
  // static async del(id) {
  //   return await this.delete(self::url + '/' + id)
  // }
  // static format(data) {
  //   return data
  // }
}
