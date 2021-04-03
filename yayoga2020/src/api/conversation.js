import base from './base'
const url = 'api/inyoga/conversations'
export default class Conversation extends base {
  static async add(data) {
    return await this.post(url, data)
  }

  static async index(data) {
    return await this.get(url, data)
  }

  static async target(id) {
    return await this.get(`api/inyoga/conversation-target/${id}`)
  }

  static async targetList() {
    return await this.get('api/inyoga/conversation-target-list')
  }
}
