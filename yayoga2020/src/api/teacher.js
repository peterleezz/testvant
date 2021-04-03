import base from './base'
import Page from '../utils/Page'

const url = 'api/services/teachers'
export default class teacher extends base {
  static page(data) {
    return new Page(url, this.format.bind(this), data)
  }

  static async show(id, data = {}) {
    return await this.get(`${url}/${id}`, data)
  }

  static async index(data = {}) {
    return await this.get(url, data)
  }

  static format(data) {
    if (!data.name_en) {
      data.name_en = data.nickname
    }
    return data
  }
}
