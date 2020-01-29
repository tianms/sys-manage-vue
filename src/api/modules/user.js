import request from '../request'
import requestParam from '../requestParam'

// 获取用户列表
export function list (params) {
  return request({
    url: '/sys/user/list',
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}

// 获取用户信息
export function info () {
  return request({
    url: '/sys/user/info',
    method: 'post',
    dataType: 'JSONP',
    data: requestParam('', 'post', false)
  })
}

// 修改密码
export function updatePassword (params) {
  return request({
    url: '/sys/user/password',
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}

// 添加用户
export function add (params) {
  console.log(params)
  return request({
    url: '/sys/user/save',
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}

// 修改用户
export function update (params) {
  return request({
    url: '/sys/user/update',
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}

// 删除用户
export function del (params) {
  return request({
    url: '/sys/user/delete',
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}
