import base from './base'
import Page from '../utils/Page'

const url = 'api/services/nearSchedules'
export default class schedule extends base {
  static page(data) {
    return new Page(`api/services/schedules`, this.format.bind(this), data)
  }

  static async show(id, data = {}) {
    return await this.get(`api/services/schedules/${id}`, data)
  }
  static async getSchedules(data = {}) {
    return new Page('api/services/nearSchedules', this.format.bind(this), data)
  }

  static async nearSchedules(data = {}) {
    return await this.get('api/services/nearSchedules', data)
  }

  static async index(data = {}) {
    return await this.get(`api/services/schedules`, data)
  }

  static format(data) {
    data.userRatio = Math.round((data.rcmd_count / 8) * 100)
    if (data.sub_type > 0) {
      data.sub_type_desc = `${data.sub_type_desc}:￥${data.price}`
    }
    if (data.substitute_id && data.substitute !== undefined && data.substitute.data.id !== undefined) {
      data.teacher = data.substitute
    }
    return data
  }
}
