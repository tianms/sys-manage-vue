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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
