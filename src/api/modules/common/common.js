import request from '../../request'
import requestParam from '../../requestParam'

// 登录
export function login (params) {
  return request({
    url: '/sys/login',
    method: 'post',
    data: requestParam(params, 'post', false)
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
