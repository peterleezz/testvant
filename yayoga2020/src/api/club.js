import base from './base'
import Page from '../utils/Page'
import { getThumb } from '@/utils/Utils'
const url = 'api/services/brands/1005/clubs'
export default class club extends base {
  /**
   * 分页方法
   */
  static page(data) {
    return new Page('api/services/brands/1005/clubs', this.format.bind(this), data)
  }

  static async index(data = {}) {
    return await this.get('api/services/brands/1005/clubs', data)
  }

  static async show(id, data = {}) {
    let rsp = await this.get(`api/services/brands/1005/clubs/${id}`, data)
    rsp.data = this.format(rsp.data)
    return rsp
  }

  static async getClubs(data = {}) {
    return await this.get(url, data)
  }

  static format(data) {
    data.desc = data.desc ? data.desc.replace(/<\/?[^>]*>/g, ' ') : ''
    // data.avatar = data.avatar.map(e => {
    //   return getThumb(e, 'c640x0')
    // })
    // console.log(data)
    return data
  }
  static async getRooms(id, data = {}) {
    return await this.get(`api/services/clubs/${id}/rooms`, data)
  }
}
