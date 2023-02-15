import Vue from 'vue'
import App from './App.vue'
import '../plugins/element.js'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


/**
 * elementUI 全局引入
 * import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  Vue.use(ElementUI) 
 */
