import base from './base'

export default class auth extends base {
  // 检查登录状态
  static async profile(data) {
    const url = 'api/services/user'
    const res = await this.get(url, data)
    return res.data
  }
  // 登录
  static async login(data) {
    const url = 'api/common/login'
    const res = await this.post(url, data)
    return res.data
  }

  // 自动登录
  static async autoLogin(data) {
    const url = 'api/common/autologin'
    const res = await this.post(url, data)
    console.log('user.js', res)
    return res.data
  }

  // 手机号登录
  static async loginByPhone(data) {
    const url = 'api/common/loginByPhone'
    const res = await this.post(url, data)
    return res.data
  }

  // 验证码
  static async code(phone) {
    const url = 'api/common/code'
    await this.post(url, {
      phone
    })
  }
}
