import request from '../../request'
import requestParam from '../../requestParam'

// 获取角色列表
export function list (params) {
  return request({
    url: '/sys/role/list',
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}

// 获取角色分页列表
export function pageList (params) {
  return request({
    url: '/sys/role/pageList',
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}

// 获取角色列表, 根据当前用户
export function select () {
  return request({
    url: '/sys/role/select',
    method: 'post',
    data: requestParam({}, 'post', false)
  })
}

// 获取角色信息
export function info (params) {
  return request({
    url: '/sys/role/info',
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}

// 添加角色
export function add (params) {
  return request({
    url: '/sys/role/save',
    method: 'post',
    data: requestParam(params)
  })
}

// 修改角色
export function update (params) {
  return request({
    url: '/sys/role/update',
    method: 'post',
    data: requestParam(params)
  })
}

// 删除角色
export function del (params) {
  return request({
    url: '/sys/role/delete',
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}
