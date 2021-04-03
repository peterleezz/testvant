import base from './base'

export default class inyoga extends base {

  static async banner() {
    return await this.get(`api/services/inyoga/banner`)
  }
}
