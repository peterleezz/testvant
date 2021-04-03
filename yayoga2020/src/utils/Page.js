import http from './Http'

export default class Pagination {
  constructor(url, processFunc, args = {}) {
    this.url = url

    this.list = []

    this.page = 0

    this.num = 15

    this.processFunc = processFunc

    this.loading = false

    this.params = []
    // 是否底部
    this.reachBottom = false
    // 是否为空
    this.empty = true
    // 是否需要清除
    this.toClear = false
    this.count = 0
    this.meta = {}
    this.args = args
  }

  setParams(args = {}) {
    this.args = args
  }

  /**
   * 加载下一页数据
   */
  async next() {
    const param = {
      page: this.page,
      num: this.num
    }
    if (this.loading) {
      console.warn('page loading!')
      return this
    }
    // 附加参数
    this.loading = true
    try {
      Object.assign(param, this.args)
      const { data, meta } = await http.get(this.url, param)
      this.meta = meta
      const pagination = meta.pagination
      this.count = pagination.count
      if (pagination.count == 0) {
        if (this.toClear) {
          this.clear()
        } else {
          this.reachBottom = true
        }
        return this
      }
      this.empty = false
      // 处理数据
      this._processData(data)
      // 设置数据
      if (this.toClear) {
        this.list = data
        this.toClear = false
      } else {
        this.list = this.list.concat(data)
      }
      this.page = pagination.current_page + 1
      if (pagination.current_page == pagination.total_pages) {
        this.reachBottom = true
      }
      return this
    } finally {
      this.loading = false
    }
  }

  /**
   * 恢复到第一页
   */
  reset() {
    this.empty = true
    this.toClear = true
    this.page = 0
    this.reachBottom = false
  }
  clear() {
    this.toClear = false
    this.page = 0
    this.list = []
  }

  /**
   * 处理数据（私有）
   */
  _processData(data) {
    if (this.processFunc) {
      for (let i in data) {
        const result = this.processFunc(data[i])
        if (result) {
          data[i] = result
        }
      }
    }
  }
}
