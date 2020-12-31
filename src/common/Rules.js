const phoneR = [{

    method: 'required',
    message: '电话不能为空'
  },
  {

    method: 'tel',
    message: '电话格式错误'
  }
]
const verifyR = [{

  method: 'rangelength',
  param: [4, 4],
  message: '请输入4位验证码'
}]

const timeR = [{

  method: 'required',

  message: '请选择时间'
}]
const contractR = [{

  method: 'required',

  message: '请选择课程'
}]
export {
  phoneR,
  verifyR,
  contractR,
  timeR
}
