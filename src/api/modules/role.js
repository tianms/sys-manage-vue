import request from '../request'
import requestParam from '../requestParam'
import isInteger from 'lodash/isInteger'

// 获取角色列表
export function list (params) {
  return request({
    url: '/sys/role/list',
    method: 'get',
    params: requestParam(params, 'get')
  })
}

// 获取角色列表, 根据当前用户
export function select () {
  return request({
    url: '/sys/role/select',
    method: 'get',
    params: requestParam({}, 'get')
  })
}

// 获取角色信息
export function info (id) {
  return request({
    url: '/sys/role/info' + (isInteger(id) ? `/${id}` : ''),
    method: 'get',
    params: requestParam({}, 'get')
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
