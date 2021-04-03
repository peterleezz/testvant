import base from './base'
import Page from '../utils/Page'
export default class mall extends base {
  static async profile(data) {
    return await this.get(`api/mall/auth`, data)
  }
  static async userprofile(id, data) {
    return await this.get(`api/mall/profile/${id}`, data)
  }

  static async updateProfile(data) {
    return await this.put(`api/mall/auth`, data)
  }

  static async lowerlist() {
    return await this.get(`api/mall/mall-lowerlist`)
  }

  static async distlist() {
    return await this.get(`api/mall/mall-orderlist`)
  }

  static async orderlist() {
    return await this.get(`api/mall/mall/orderlist`)
  }

  static async st() {
    return await this.get(`api/mall/mall-st`)
  }

  static async questions(data) {
    return await this.get(`api/mall/proxy/questions`, data)
  }

  static async pass(data) {
    return await this.post(`api/mall/proxy/questions/allright`, data)
  }

  static async withdrawals(data) {
    return await this.post(`api/mall/mall-withdrawals`, data)
  }

  static async getdrawals(data) {
    return await this.get(`api/mall/mall-withdrawals`, data)
  }

  static async autoapply() {
    return await this.post(`api/mall/proxy/autoapply`)
  }

  static viewers(data) {
    return new Page('api/mall/mall-viewers', null, data)
  }

  static async proxyGoods(id) {
    return await this.get(`api/mall/proxy/goods/${id}`)
  }
}
