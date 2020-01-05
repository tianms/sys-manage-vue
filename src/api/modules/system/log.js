import request from '../../request'
import requestParam from '../../requestParam'

// 获取日志列表
export function list (params) {
  return request({
    url: '/sys/log/list',
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}

// 获取定时任务日志列表
export function scheduleList (params) {
  return request({
    url: '/sys/scheduleLog/list',
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}

// 获取定时任务日志信息
export function scheduleInfo (params) {
  return request({
    url: '/sys/scheduleLog/info',
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}
