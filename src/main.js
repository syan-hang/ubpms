import Vue from 'vue'
import App from './App.vue'
import '../plugins/element.js'
import 'font-awesome/css/font-awesome.min.css'
// import axios from 'axios'
import router from './router/index.js'
import service from './service.js'

// Vue.prototype.axios = axios       // 挂载到原型，可在全局使用
Vue.prototype.service = service
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 通过local storage 中的username 或者 token 进行验证
  if (!localStorage.getItem('username')) {
    if (to.path !== '/login') {
      next('/login')
    } else next()
  } else next()
})

new Vue({
  // 挂载router
  router,
  render: h => h(App),
}).$mount('#app')


/**
 * elementUI 全局引入
 * import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  Vue.use(ElementUI) 
 */
