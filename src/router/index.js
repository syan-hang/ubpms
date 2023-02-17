import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login',
            component: resolve => require(['@/components/Login'], resolve)
        },
        {
            path: '/login',
            component: resolve => require(['@/components/Login'], resolve)  // 异步组件
        },
        {
            path: '*',
            component: resolve => require(['@/components/NotFound'], resolve)
        },
        {
            path: '/home',
            // component:()=>import('@/components/Home')  // 路由懒加载
            component: resolve => require(['@/components/Home'], resolve)  // 异步组件
        }
    ],
    mode: 'history'
})