export default function dateformat() {}
 
/**
 * 格式化时间
 * @param date
 * @param fmt
 * @returns {*}
 */
dateformat.format = function(date, fmt) {
  var o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  }
  if (!this.isNotEmpty(fmt)) {
    fmt = 'yyyy-MM-dd hh:mm:ss'
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return fmt
}

dateformat.formatToDate = function(dateStr) {
  if (this.isNotEmpty(dateStr)) {
    return new Date(Date.parse(dateStr.replace(/-/g, '/')))
  }
  return ''
}

dateformat.dayOfWeek = function(date) {
  return '周' + '日一二三四五六'.split('')[date.getDay()]
}
dateformat.getDateInterval = function(date1, date2) {
  var days = date1.getTime() - date2.getTime()
  return parseInt(days / (1000 * 3600 * 24))
}

dateformat.getDateStrInterval = function(dateStr1, dateStr2) {
  var date1 = this.formatToDate(dateStr1)
  var date2 = this.formatToDate(dateStr2)
  var days = date1.getTime() - date2.getTime()
  return parseInt(days / (1000 * 3600 * 24))
}

dateformat.getDateStart = function(date) {
  var fmt = 'yyyy-MM-dd'
  var dateStartStr = this.getDateStartStr(date, fmt)
  var startTime = new Date(Date.parse(dateStartStr))
  return startTime
}

dateformat.getDateStartStr = function(date, fmt) {
  if (typeof fmt == 'undefined') {
    fmt = 'yyyy-MM-dd'
  }
  var dateStr = this.format(date, fmt)
  dateStr += ' 00:00:00'
  return dateStr
}

dateformat.getDateEnd = function(date) {
  var fmt = 'yyyy-MM-dd'
  var dateEndStr = this.getDateEndStr(date, fmt)
  var endTime = new Date(Date.parse(dateEndStr))
  return endTime
}

dateformat.getDateEndStr = function(date, fmt) {
  if (typeof fmt == 'undefined') {
    fmt = 'yyyy-MM-dd'
  }
  var endStr = this.format(date, fmt)
  endStr += ' 23:59:59'
  return endStr
}

dateformat.compareDate = function(d1, d2) {
  if (d1 && d2) {
    if (d1.getTime() > d2.getTime()) {
      return 1
    } else if (d1.getTime() == d2.getTime()) {
      return 0
    } else if (d1.getTime() < d2.getTime()) {
      return -1
    }
  }
}

dateformat.isLeapYear = function(date) {
  if (date instanceof Date) {
    return 0 == date.getYear() % 4 && (date.getYear() % 100 != 0 || date.getYear() % 400 == 0)
  }
  console.warn('argument format is wrong')
  return false
}

dateformat.getThisMonthDays = function(year, month) {
  return new Date(year, month, 0).getDate()
}

dateformat.getFirstDayOfWeek = function(year, month) {
  return new Date(Date.UTC(year, month - 1, 1)).getDay()
}

dateformat.getLastDayOfWeek = function(year, month) {
  return new Date(Date.UTC(year, month, 0)).getDay()
}

dateformat.isValidDate = function(dateStr) {
  if (this.isNotEmpty(dateStr)) {
    var r = dateStr.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/)
    if (r == null) {
      return false
    }
    var d = new Date(r[1], r[3] - 1, r[4])
    var num = d.getFullYear() == r[1] && d.getMonth() + 1 == r[3] && d.getDate() == r[4]
    return num != 0
  }
}

dateformat.addDay = function(date, dayNum) {
  if (dayNum == 0) return date
  if (this.isNotEmpty(date) && this.isNotEmpty(dayNum) && date instanceof Date && typeof dayNum == 'number') {
    date.setDate(date.getDate() + dayNum)
  } else {
    console.warn('date or dayNum format wrong')
  }
  return date
}

dateformat.addDayStr = function(dateStr, dayNum) {
  var date = ''
  if (this.isNotEmpty(dateStr) && this.isNotEmpty(dayNum) && typeof dayNum == 'number') {
    date = this.formatToDate(dateStr)
    if (dayNum == 0) return date
    date.setDate(date.getDate() + dayNum)
  } else {
    console.warn('dateStr or dayNum format wrong')
    return this.formatToDate(dateStr)
  }
  return date
}

dateformat.addMonth = function(date, monthNum) {
  if (this.isNotEmpty(date) && this.isNotEmpty(monthNum) && date instanceof Date && typeof monthNum == 'number') {
    date.setMonth(date.getMonth() + monthNum)
  } else {
    console.warn('date or monthNum format wrong')
  }
  return date
}

dateformat.addMonthStr = function(dateStr, monthNum) {
  var date = ''
  if (this.isNotEmpty(dateStr) && this.isNotEmpty(monthNum) && typeof monthNum == 'number') {
    date = this.formatToDate(dateStr)
    date.setMonth(date.getMonth() + monthNum)
  } else {
    return this.formatToDate(dateStr)
    console.warn('date or monthNum format wrong')
  }
  return date
}

dateformat.addYear = function(date, yearNum) {
  if (this.isNotEmpty(date) && this.isNotEmpty(yearNum) && date instanceof Date && typeof yearNum == 'number') {
    date.setYear(date.getFullYear() + yearNum)
  } else {
    console.warn('date or yearNum format wrong')
  }
  return date
}

dateformat.addYearStr = function(dateStr, yearNum) {
  var date = ''
  if (this.isNotEmpty(dateStr) && this.isNotEmpty(yearNum) && typeof yearNum == 'number') {
    date = this.formatToDate(dateStr)
    date.setYear(date.getFullYear() + yearNum)
  } else {
    console.warn('date or yearNum format wrong')
  }
  return date
}
// 获取当月第一天
dateformat.getMonthFirstDay = function() {
  let date = new Date()
  return dateformat.format(new Date(date.getFullYear(), date.getMonth(), 1), 'yyyy-MM-dd')
}

// 获取当月最后一天
dateformat.getMonthLastDay = function() {
  let date = new Date()
  return dateformat.format(new Date(date.getFullYear(), date.getMonth() + 1, 0), 'yyyy-MM-dd')
}

dateformat.isNotEmpty = function(str) {
  if (str !== '' && str != null && typeof str != 'undefined') {
    return true
  }
  console.warn('argument format is wrong')
  return false
}

dateformat.timeline = function(timeStr) {
  var now = new Date()
  if (timeStr == '0000-00-00' || timeStr == '0000-00-00 00:00:00') {
    return '远古时期'
  }
  var time = this.formatToDate(timeStr)
  var interval = (now.getTime() - time.getTime()) / 1000
  if (interval < 0) {
    interval = interval * -1
    if (interval < 60) {
      return interval + '秒后'
    }
    if (interval < 3600) {
      return Math.ceil(interval / 60) + '分钟后'
    }

    if (interval < 24 * 3600) {
      return Math.ceil(interval / 3600) + '小时后'
    }

    if (interval < 31 * 24 * 3600) {
      return Math.ceil(interval / (24 * 3600)) + '天后'
    }

    if (interval < 365 * 24 * 3600) {
      return Math.ceil(interval / (24 * 3600 * 31)) + '月后'
    } else {
      return Math.ceil(interval / (24 * 3600 * 365)) + '年后'
    }
  } else {
    if (interval < 60) {
      return interval + '秒前'
    }
    if (interval < 3600) {
      return Math.ceil(interval / 60) + '分钟前'
    }

    if (interval < 24 * 3600) {
      return Math.ceil(interval / 3600) + '小时前'
    }

    if (interval < 31 * 24 * 3600) {
      return Math.ceil(interval / (24 * 3600)) + '天前'
    }

    if (interval < 365 * 24 * 3600) {
      return Math.ceil(interval / (24 * 3600 * 31)) + '月前'
    } else {
      return Math.ceil(interval / (24 * 3600 * 365)) + '年前'
    }
  }
  return timeStr
}

dateformat.getWeek = function(date, type) {
  if (date) {
    if (!this.isNotEmpty(type)) {
      type = 0
    }
    var index = date.getDay()
    var dateStr = ''
    switch (type) {
      case this.WEEKTYPE.ZH_DAYNAME:
        dateStr = this._options.ZH.dayNames[index]
        break
      case this.WEEKTYPE.ZH_SDAYNAME:
        dateStr = this._options.ZH.shortDayNames[index]
        break
      case this.WEEKTYPE.US_DAYNAME:
        dateStr = this._options.US.dayNames[index]
        break
      case this.WEEKTYPE.US_SDAYNAME:
        dateStr = this._options.US.shortDayNames[index]
        break
    }
    return dateStr
  }
}

dateformat.WEEKTYPE = {
  ZH_DAYNAME: 0,
  ZH_SDAYNAME: 1,
  US_DAYNAME: 2,
  US_SDAYNAME: 3
}

dateformat._options = {
  ZH: {
    dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    shortDayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    shortMonthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  US: {
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortMonthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }
}

// 获取当前时间之后seconds秒
dateformat.addSeconds = seconds => {
  const time = new Date()
  const ms = time.getTime() // 转化为时间戳毫秒数

  time.setTime(ms + 1000 * seconds)
  return dateformat.format(time, 'yyyy-MM-dd hh:mm:ss')
}
