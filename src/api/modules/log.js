import request from '../request'
import requestParam from '../requestParam'
import isInteger from 'lodash/isInteger'

// 获取日志列表
export function list (params) {
  return request({
    url: '/sys/log/list',
    method: 'get',
    params: requestParam(params, 'get')
  })
}

// 获取定时任务日志列表
export function scheduleList (params) {
  return request({
    url: '/sys/scheduleLog/list',
    method: 'get',
    params: requestParam(params, 'get')
  })
}

// 获取定时任务日志信息
export function scheduleInfo (id) {
  return request({
    url: '/sys/scheduleLog/info' + (isInteger(id) ? `/${id}` : ''),
    method: 'get',
    params: requestParam({}, 'get')
  })
}
