import request from '../../request'
import requestParam from '../../requestParam'

// 获取导航菜单列表 / 权限
export function nav () {
  return request({
    url: '/sys/menu/nav',
    method: 'post',
    data: requestParam({}, 'post', false)
  })
}

// 获取菜单列表
export function list () {
  return request({
    url: '/sys/menu/list',
    method: 'post',
    data: requestParam({}, 'post', false)
  })
}

// 获取不包括按钮的菜单列表（主要用于菜单编辑选择上级菜单使用）
export function noButtonMenuList () {
  return request({
    url: '/sys/menu/noButtonMenuList',
    method: 'post',
    data: requestParam({}, 'post', false)
  })
}

// 获取菜单信息
export function info (params) {
  return request({
    url: '/sys/menu/info',
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}

// 添加菜单
export function add (params) {
  return request({
    url: '/sys/menu/save',
    method: 'post',
    data: requestParam(params)
  })
}

// 修改菜单
export function update (params) {
  return request({
    url: '/sys/menu/update',
    method: 'post',
    data: requestParam(params)
  })
}

// 删除菜单
export function del (params) {
  return request({
    url: '/sys/menu/delete',
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}
