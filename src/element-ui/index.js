import Vue from 'vue'
import element from 'element-ui'

// medium: 中等 small：小型 mini：超小
Vue.use(element, {
  size: 'mini'
})

Vue.use(element.Loading.directive)

Vue.prototype.$loading = element.Loading.service
Vue.prototype.$msgbox = element.MessageBox
Vue.prototype.$alert = element.MessageBox.alert
Vue.prototype.$confirm = element.MessageBox.confirm
Vue.prototype.$prompt = element.MessageBox.prompt
// Vue.prototype.$notify = Notification
Vue.prototype.$message = element.Message
