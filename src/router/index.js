import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./import-' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/404', component: _import('error/404'), name: '404', desc: '404未找到' },
    { path: '/login', component: _import('login/index'), name: 'login', desc: '登录' },
    {
      path: '/',
      component: _import('layout/index'),
      name: 'layout',
      redirect: { name: 'home' },
      desc: '上左右整体布局',
      children: [
        // 通过isTab属性, 设定是否通过tab标签页展示内容
        { path: '/home', component: _import('home/index'), name: 'home', desc: '首页' },
        { path: '/user', component: _import('system/user/index'), name: 'user', desc: '管理员管理', meta: { isTab: true } },
        { path: '/role', component: _import('system/role/index'), name: 'role', desc: '角色管理', meta: { isTab: true } },
        { path: '/menu', component: _import('system/menu/index'), name: 'menu', desc: '菜单管理', meta: { isTab: true } },
        { path: '/log', component: _import('system/log/index'), name: 'log', desc: '系统日志', meta: { isTab: true } }
      ],
      beforeEnter (to, from, next) {
        let token = Vue.cookie.get('token')
        if (!token || !/\S/.test(token)) {
          next({ name: 'login' })
        }
        next()
      }
    },
    { path: '*', redirect: { name: '404' } }
  ]
})
