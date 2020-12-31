import base from './base'
import Page from './Page'

const url = 'api/inyoga/ptappoints'

export default class PtAppoint extends base {
  static page(data) {
    return new Page(url, this.format.bind(this), data)
  }

  static async create(data) {
    console.log(data)
    return await this.post(url, data)
  }

  static async show(id, data = {}) {
    return await this.get(`${url}/${id}`, data)
  }
  static async timefields(id, data = {}) {
    return await this.get(`api/services/teachers/${id}/timefields`, data)
  }
  static async update(id, data) {
    return await this.put(`${url}/${id}`, data)
  }

  static async remove(id) {
    return await this.delete(`${url}/${id}`)
  }

  static async confirm(id) {
    return await this.put(`${url}/${id}/perform`)
  }

  static format(data) {
    if (data.is_appoint == 0 && data.is_come == 0) {
      data.show_tag = '等待老师确认'
    } else if (data.is_appoint > 0 && data.is_come == 0) {
      data.show_tag = '等待上课'
    } else if (data.is_appoint > 0 && data.is_come == 1) {
      data.show_tag = '未履约'
    } else if (data.is_appoint > 0 && data.is_come > 1) {
      data.show_tag = '已完成'
    }
    return data
  }
}
