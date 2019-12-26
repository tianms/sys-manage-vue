import request from '../request'
import requestParam from '../requestParam'

// 登录
export function login (params) {
  return request({
    url: '/sys/login',
    method: 'post',
    data: requestParam(params)
  })
}

// 退出
export function logout () {
  return request({
    url: '/sys/logout',
    method: 'post',
    data: requestParam()
  })
}

// 性别适配
export function sexFit (params) {
  if (params === null || params === '' || params === undefined) {
    return params
  } else {
    if (params === '1' || params === 1) {
      return '男'
    } else if (params === '2' || params === 2) {
      return '女'
    }
  }
}

// 日期字符串格式化 2018-01-01 00:00:00 --> 2018-01-01
export function dateFormat (params) {
  if (params === null || params === '' || params === undefined) {
    return params
  } else {
    var date = new Date(Date.parse(params))
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  }
}
