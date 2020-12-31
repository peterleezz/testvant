import base from './base'
const url = 'api/inyoga/ptcontracts'
export default class PtCotract extends base {
  static async index(data = {}) {
    return await this.get(url, data)
  }

  static async show(id, data = {}) {
    return await this.get(`${url}/${id}`, data)
  }
}
