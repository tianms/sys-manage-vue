import Vue from 'vue'
import axios from 'axios'
import router from '@/router'

// axios是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端
// 创建axios实例
const service = axios.create({
  timeout: 1000 * 30,
  baseURL: process.env.BASE_API, // 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

// request拦截器
service.interceptors.request.use(config => {
  config.headers['token'] = Vue.cookie.get('token')
  return config
}, error => {
  return Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(response => {
  if (response.data && response.data.code === 401) { // 401, token失效
    Vue.cookie.delete('token')
    router.push({ name: 'login' })
  } else if (response.data && response.data.code === 500) { // 后台系统出错
    console.log(response.data.msg)
  }
  return response
}, error => {
  if (error.request) {
  } else if (error.response) {
  }
  if (error && error.response) {
    switch (error.response.status) {
      case 400: error.message = '请求错误(400)'
        break
      case 401: error.message = '未授权，请重新登录(401)'
        Vue.cookie.delete('token')
        router.push({ name: 'login' })
        break
      case 403: error.message = '拒绝访问(403)'
        break
      case 404: error.message = '请求出错(404)'
        break
      case 408: error.message = '请求超时(408)'
        break
      case 500: error.message = '服务器错误(500)'
        break
      case 501: error.message = '服务未实现(501)'
        break
      case 502: error.message = '网络错误(502)'
        break
      case 503: error.message = '服务不可用(503)'
        break
      case 504: error.message = '网络超时(504)'
        break
      case 505: error.message = 'HTTP版本不受支持(505)'
        break
      default: error.message = `连接出错(${error.response.status})!`
    }
  } else {
    error.message = '连接服务器失败!'
  }
  return Promise.reject(error)
})

export default service
