const WxNotificationCenter = require('./WxNotificationCenter.js')

export default class Event {
  static SWITCH_CLUB = 'SWITCH_CLUB'
  static listen(eventName, callback, observer) {
    WxNotificationCenter.addNotification(eventName, callback, observer)
  }

  static emit(eventName, params) {
    WxNotificationCenter.postNotificationName(eventName, params)
  }

  static remove(eventName, observer) {
    WxNotificationCenter.removeNotification(eventName, observer)
  }
}
