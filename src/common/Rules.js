const phoneR = [{

    method: 'required',
    message: '电话不能为空'
  },
  {

    method: 'tel',
    message: '电话格式错误'
  }
]
const verifyR
 = [{

  method: 'rangelength',
  param:[4,4],
  message: '请输入4位验证码'
}]
export {
  phoneR,
  verifyR
}
