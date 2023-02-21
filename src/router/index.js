import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login',
            hidden:true,
            component: resolve => require(['@/components/Login'], resolve)
        },
        {
            path: '/login',
            hidden:true,
            component: resolve => require(['@/components/Login'], resolve)  // 异步组件
        },
        {
            path: '*',
            hidden:true,
            component: resolve => require(['@/components/NotFound'], resolve)
        },
        {
            path: '/home',
            hidden:true,
            // component:()=>import('@/components/Home')  // 路由懒加载
            component: resolve => require(['@/components/Home'], resolve)  // 异步组件
        },
        {
            path: '/students',
            redirect:'/students/studentList',
            name:'学生管理',
            iconClass:'fa fa-users',
            component: resolve => require(['@/components/Home'], resolve),  // 异步组件
            children: [
                {
                    path:'/students/studentList',
                    name:'学生列表',
                    iconClass:'fa fa-list',
                    component:resolve=>require(['@/components/students/StudentList'],resolve)
                },
                {
                    path:'/students/infoList',
                    name:'信息列表',
                    iconClass:'fa fa-list-alt',
                    component:resolve=>require(['@/components/students/InfoList'],resolve)
                },
                {
                    path:'/students/InfoLists',
                    name:'信息管理',
                    iconClass:'fa fa-list-alt',
                    component:resolve=>require(['@/components/students/InfoLists'],resolve)
                },
                {
                    path:'/students/workList',
                    name:'作业列表',
                    iconClass:'fa fa-list-ul',
                    component:resolve=>require(['@/components/students/WorkList'],resolve)
                },
                {
                    path:'/students/workMent',
                    name:'作业管理',
                    iconClass:'fa fa-th-list',
                    component:resolve=>require(['@/components/students/WorkMent'],resolve)
                }

            ]
        },
        {
            path: '/dataAnalysis',
            name:'数据分析',
            iconClass:'fa fa-bar-chart',
            component: resolve => require(['@/components/Home'], resolve),  // 异步组件
            children: [
                {
                    path:'/dataAnalysis/dataView',
                    name:'数据概览',
                    iconClass:'fa fa-line-chart',
                    component:resolve=>require(['@/components/dataAnalysis/DataView'],resolve)
                },
                {
                    path:'/dataAnalysis/mapView',
                    name:'地图概览',
                    iconClass:'fa fa-line-chart',
                    component:resolve=>require(['@/components/dataAnalysis/MapView'],resolve)
                },
                {
                    path:'/dataAnalysis/scoreMap',
                    name:'分数地图',
                    iconClass:'fa fa-line-chart',
                    component:resolve=>require(['@/components/dataAnalysis/ScoreMap'],resolve)
                },
                {
                    path:'/dataAnalysis/travelMap',
                    name:'旅游地图',
                    iconClass:'fa fa-line-chart',
                    component:resolve=>require(['@/components/dataAnalysis/TravelMap'],resolve)
                }

            ]
        },
        {
            path: '/users',
            name:'用户中心',
            iconClass:'fa fa-user',
            component: resolve => require(['@/components/Home'], resolve),  // 异步组件
            children: [
                {
                    path:'/users/user',
                    name:'权限管理',
                    iconClass:'fa fa-line-chart',
                    component:resolve=>require(['@/components/users/User'],resolve)
                }

            ]
        }
    ],
    mode: 'history'
})