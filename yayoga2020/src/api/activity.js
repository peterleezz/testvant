import base from './base'
import Page from '../utils/Page'

import Cache from '../utils/Cache'

export default class activity extends base {
  static async show(id) {
    return await this.get(`api/services/inyoga/activity/${id}`)
  }

  static async common(id, data) {
    return await this.get(`api/services/activities/${id}`, data)
  }
}
