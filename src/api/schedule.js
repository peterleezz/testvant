import base from './base'
import Page from './Page'
import dateformat from '@/common/Date'
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
    const rsp = await this.get(`api/services/schedules`, data)
    rsp.data = rsp.data.map(e => this.format(e))
    return rsp
  }

  static format(data) {
    let status = ''
    if (data.appoint_count >= data.room.data.num) {
      data.status = '已满'
      data.can_appoint = false
    } else if (data.start <= dateformat.format(new Date(), 'yyyy-MM-dd hh:mm:ss')) {
      data.status = '已过期'
      data.can_appoint = false
    } else if (data.start >= dateformat.format(dateformat.addDay(new Date, 2), 'yyyy-MM-dd')) {
      data.status = '待开课'
      data.can_appoint = false
    } else {
      data.can_appoint = true
    }
    if (data.start <= dateformat.format(dateformat.addHour(new Date, 2), 'yyyy-MM-dd')) {

      data.can_cancel = false
    } else data.can_cancel = true
    data.start = data.start.substr(5, 11)
    return data
  }
}
