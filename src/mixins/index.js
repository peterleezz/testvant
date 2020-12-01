import v from '@/common/Validate'
import Lang from '@/common/Lang'
import Tips from '@/common/Tips'
export default {
  data: {

  },
  methods: {
    //不知道为啥，vantweapp的双向绑定不起作用，只能手动hack一下。
    vanfiledchangehack(e) {
      this[e.target.dataset.ref] = e.$wx.detail
    },
    // 卸载页面
    onUnload() {
      this.input = {}
    },
    // 判断字符串是否为空
    isEmpty(str) {
      return Lang.isEmpty(str)
    },
    // 判断字符串是否不为空
    isNotEmpty(str) {
      return !Lang.isEmpty(str)
    },
    // 提示错误（调用FormTips）
    tips(message) {
      Tips.error(message)
    },
    // 校验
    check(rules, value) {
      for (let rule of rules) {

        if (rule.method != 'noDuplicate' && Lang.isArray(value)) {
          // 数组校验每个值
          for (let innerValue of value) {
            let [isValid, message] = this.execCheck(rule, innerValue)

            if (!isValid) {
              return { isValid, message }
            }
          }
        } else {
          // 单元素直接校验
          let [isValid, message] = this.execCheck(rule, value)
          console.log('check ', rule, value, isValid, message)

          if (!isValid) {
            return { isValid, message }
          }
        }
      }
      return { isValid: true, message: '' }
    },
    execCheck(rule, value) {
      const method = v[rule.method].bind(v)
      const isValid = method(value, rule.param)
      console.log('----', rule)

      if (!isValid) {

        return [false, rule.message]
      }
      return [true, '']
    },
    onInput(e) {
      const fieldName = e.currentTarget.id
      this.input[fieldName] = e.detail.value
    },

    getEditInfo(info) {
      let obj = this.data
      Object.keys(obj).forEach(function(key) {
        if (typeof obj[key] == 'object') {
          let name = obj[key].name
          Object.keys(info).forEach(function(k) {
            if (k == name) {
              if (obj[key].type == 'select') {
                obj[key].list.forEach((e, index) => {
                  if (e.id == info[k]) obj[key].index = index
                })
              } else {
                obj[key].value = info[k]
              }
            }
          })
        }
      })
    }

  },

}
