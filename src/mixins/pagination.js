import wepy from '@wepy/core'
export default {
  data: {
    page: null,
    init: false,
    isPageLoading: false,
    isPageEmpty: false,
    isPageReachBottom: false
  },
  methods: {
    async next() {
      try {
        if (this.page.reachBottom) {
          return
        }

        this.isPageLoading = true
        // const param = this.params ? this.params() : {}
        await this.page.next()
        this.isPageReachBottom = this.page.reachBottom
        this.isPageEmpty = this.page.list.length === 0
        if (this.onPageLoad) {
          this.onPageLoad()
        }
      } catch (e) {
        console.log(e)
      } finally {
        this.isPageLoading = false
        this.init = true

      }
    },

    /**
     * 到达底部
     */

    async reload() {
      console.log('reload', this.page)
      this.page.reset()
      await this.next()
      wx.stopPullDownRefresh()
    },
    /**
     * 重新加载
     */


    /**
     * 更新列表（外部事件）
     */
    async update() {
      await this.reload()
    }
  },

  async onReachBottom() {
    if (this.page !== null) {
      await this.next()
    }
  },
  /**
   * 下拉刷新
   */
  async onPullDownRefresh() {
    console.log('onPullDownRefresh', this.page)
    if (this.page) {
      await this.reload()
    }
  },
}
