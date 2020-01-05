/**
 * 是否有权限
 * @param {*} key
 */
export function isAuth (key) {
  return JSON.parse(sessionStorage.getItem('permissions') || '[]').indexOf(key) !== -1 || false
}

/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export function treeDataTranslate (data, id = 'id', pid = 'parentId') {
  var res = []
  var temp = {}
  for (var i = 0; i < data.length; i++) {
    temp[data[i][id]] = data[i]
  }
  for (var k = 0; k < data.length; k++) {
    if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
      if (!temp[data[k][pid]]['children']) {
        temp[data[k][pid]]['children'] = []
      }
      if (!temp[data[k][pid]]['_level']) {
        temp[data[k][pid]]['_level'] = 1
      }
      data[k]['_level'] = temp[data[k][pid]]._level + 1
      temp[data[k][pid]]['children'].push(data[k])
    } else {
      res.push(data[k])
    }
  }
  return res
}

/**
 * 获取字符串字节长度
 * @param {*} s
 */
export function getStringLength (s) {
  return s.replace(/[\u4e00-\u9fa5\uff00-\uffff]/g, '**').length
}

/**
 * 获取uuid
 */
export function getUUID () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
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

// 校验字符串是否为空，空返回true，不是空返回false
export function checkStr (str) {
  if (str === null || str === '' || str === undefined || str.length === 0) {
    return true
  }
  return false
}
