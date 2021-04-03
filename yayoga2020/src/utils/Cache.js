import club from '../api/club'
import auth from '../api/auth'
import schedule from '../api/schedule'
import contract from '../api/contract'
import yaascore from '../api/yaascore'
import util from '../api/util'
import wepy from 'wepy'
export default class Cache {
  static cache = new Map()
  static _debug = true

  /**
   * 获取位置缓存
   **/
  static async location() {
    let latitude = 0
    let longitude = 0
    const KEY = `LOCATION`
    if (this.isExpired(KEY, 120)) {
      try {
        let rsp = await wepy.getLocation()
        latitude = rsp.latitude
        longitude = rsp.longitude
      } catch (e) {
        console.log(e)
      }
      const info = { latitude, longitude }
      this.set(KEY, info)
    }
    return this.cache.get(KEY)
  }

  static async yaatop3() {
    const KEY = `YAATOP3`
    if (this.isExpired(KEY, 120)) {
      try {
        const info = await yaascore.ranking({ num: 3, include: 'member' })

        this.set(KEY, info.data)
      } catch (e) {
        console.log(e)
      }
    }
    return this.cache.get(KEY)
  }

  static async contracts() {
    const KEY = `CONTRACTS`
    if (this.isExpired(KEY)) {
      const info = await contract.index()
      this.set(KEY, info)
    }
    return this.cache.get(KEY)
  }

  static async appointSuccess() {
    const KEY = `appointSuccess`
    if (this.isExpired(KEY, 120)) {
      const info = await util.appointSuccess()
      this.set(KEY, info.data)
    }
    return this.cache.get(KEY)
  }

  static async seatPics() {
    const KEY = `SEATPICS`
    if (this.isExpired(KEY, 120)) {
      const info = await util.seatPics()
      this.set(KEY, info.data)
    }
    return this.cache.get(KEY)
  }

  static async schedule(id, expire_time = 120) {
    const KEY = `SCHEDULE_${id}`
    if (this.isExpired(KEY, expire_time)) {
      const info = await schedule.show(id, { include: 'room,courseDetail,teacher,substitute,appoint.xcxuser,club' })
      schedule.format(info.data)
      this.set(KEY, info)
    }
    return this.cache.get(KEY)
  }
  static async profile() {
    const KEY = `PROFILE`
    if (this.isExpired(KEY, 120)) {
      const info = await auth.profile({ include: 'yaaDetail' })
      this.set(KEY, info)
    }
    return this.cache.get(KEY)
  }

  static async course(id) {
    const KEY = `COURSE_${id}`
    if (this.isExpired(KEY, 120)) {
      const info = await auth.profile({ include: 'yaa' })
      this.set(KEY, info)
    }
    return this.cache.get(KEY)
  }

  static async schedules(club_id, day) {
    const KEY = `SCHEDULES_${club_id}_${day}`
    if (this.isExpired(KEY)) {
      const info = await schedule.index({ club_id, include: 'room,course,teacher,appoint', start_time: day })
      this.set(KEY, info)
    }
    return this.cache.get(KEY)
  }

  /**
   * 获取店铺信息（缓存）
   */
  static async club(id, data = {}) {
    const KEY = `CLUB_DETAIL_${id}`
    if (this.isExpired(KEY)) {
      const info = await club.show(id, data)
      this.set(KEY, info)
    }
    return this.cache.get(KEY)
  }

  static async clubs(activityName = '') {
    const KEY = `CLUBS_ALL_${activityName}`
    if (this.isExpired(KEY, 60)) {
      const { latitude, longitude } = await this.location()
      const info = await club.index({
        lat: latitude,
        lon: longitude,
        activityName: activityName,
        num: 99
      })
      this.set(KEY, info.data)
    }
    return this.cache.get(KEY)
  }

  /**
   * 判断是否过期
   */
  static isExpired(key, minute = 5) {
    const value = this.cache.get(key)
    if (value == null) {
      this.log(`[cache]${key} not exists`)
      return true
    }
    const interval = new Date().getTime() - value._lastupdate
    const isExpired = interval > minute * 60 * 1000
    if (isExpired) {
      this.log(`[cache]${key} expired, interval=${interval}`)
      this.cache.delete(key)
    } else {
      this.log(`[cache]${key} exists, interval=${interval}`)
    }
    return isExpired
  }
  /**
   * 删除缓存对象
   */
  static remove(key) {
    if (key === null) {
      return
    }
    this.cache.delete(key)
  }

  static clearall() {
    this.cache = new Map()
  }
  /**
   * 设置缓存
   */
  static set(key, value) {
    if (key === null) {
      return
    }
    value._lastupdate = new Date().getTime()
    this.cache.set(key, value)
  }

  static get(key) {
    if (key === null) {
      return
    }
    return this.cache.get(key)
  }
  static log(text) {
    if (this._debug) {
      console.info(text)
    }
  }
}
