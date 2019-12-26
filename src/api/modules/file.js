import Vue from 'vue'
// 人员模板下载
export function employeeTemplateDownload (params) {
  window.location.href = process.env.BASE_API + '/file/excelTemplateDownload?token=' + Vue.cookie.get('token') + '&type=EE'
}

// 人员信息导入路径
export function importEmployeeDataUrl () {
  return process.env.BASE_API + '/employee/importEmployeeData?token=' + Vue.cookie.get('token')
}

// 薪资模板下载
export function payTemplateDownload (params) {
  window.location.href = process.env.BASE_API + '/file/excelTemplateDownload?token=' + Vue.cookie.get('token') + '&type=PAY'
}

// 薪酬信息导入路径
export function importPayDataUrl () {
  return process.env.BASE_API + '/pay/importPayData?token=' + Vue.cookie.get('token')
}

// 人员信息导出
export function exportEmployeeDate (params) {
  window.location.href = process.env.BASE_API + '/employee/exportEmployeeDate?token=' + Vue.cookie.get('token') + '&param=' + params
}
