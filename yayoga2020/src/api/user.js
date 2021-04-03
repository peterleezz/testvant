import base from './base'
const url = `api/services/user`
export default class user extends base {
  static async index(data) {
    return await this.get(url, data)
  }
  static async auth(data) {
    return await this.get('api/inyoga/auth', data)
  }
}
