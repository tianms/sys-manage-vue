import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import VueCookie from 'vue-cookie'
import '@/element-ui'
import '@/assets/scss/index.scss'
import 'font-awesome/css/font-awesome.css'
import { isAuth } from '@/utils'
import GeminiScrollbar from 'vue-gemini-scrollbar'
import IconSvg from '@/components/icon-svg'
import App from '@/App'
import md5 from 'js-md5'
import API from '@/api'

Vue.use(VueCookie)
Vue.use(GeminiScrollbar)
Vue.component('IconSvg', IconSvg)
Vue.config.productionTip = false

// 非生产环境, 适配mockjs模拟数据.
/* if (process.env.NODE_ENV !== 'production') {
  require('@/mock')
} */

// 挂载权限方法
Vue.prototype.isAuth = isAuth
// md5加密
Vue.prototype.$md5 = md5
// base64加密
Vue.prototype.$base64 = require('js-base64').Base64

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  // 添加监听关闭菜单栏，执行清除当前登录人缓存  tianms  2019.03.04
  mounted () {
    window.addEventListener('load', ev => this.loadMethod())
    window.addEventListener('beforeunload', ev => this.beforeUnloadMethod())
    window.addEventListener('unload', ev => this.unloadMethod())
  },
  methods: {
    beforeUnloadMethod () {
      window.sessionStorage['tempFlag'] = true
    },
    unloadMethod () {
      window.sessionStorage['tempFlag'] = true
    },
    loadMethod () {
      if (!window.sessionStorage['tempFlag']) {
        API.common.logout().then(({data}) => {
          if (data && data.code === 0) {
            this.DELETE_CONTENT_TABS()
          }
        })
      } else {
        window.sessionStorage.removeItem('tempFlag')
      }
    }
  }
})
