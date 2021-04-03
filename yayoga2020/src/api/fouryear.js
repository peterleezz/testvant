import base from './base'

export default class fouryear extends base {
  static async store() {
    return await this.post('api/services/inyoga/fouryear')
  }
  static async myinfo() {
    return await this.get('api/services/inyoga/user/fouryear')
  }
  static async rank() {
    return await this.get('api/services/inyoga/fouryear/rank')
  }
  static async demolition(id) {
    return await this.post(`api/services/inyoga/users/${id}/fouryear`)
  }

  static async show(id) {
    return await this.get(`api/services/inyoga/users/${id}/fouryear`)
  }

  static async friendRank(id) {
    return await this.get(`api/services/inyoga/users/${id}/fouryear/rank`)
  }
}
