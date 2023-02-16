import axios from 'axios'
import { getToken } from './utils/tokenManage'
import { Message } from 'element-ui'

const service = axios.create({
    // baseUrl 会自动加在请求地址上,又会被vue.config.js中的代理设置给解析替换
    baseURL: '/api',
    timeout: 3000  //指定超时时间
})

// 添加请求拦截器
service.interceptors.request.use((config) => {
    // 在发送请求前做些什么
    // 获取并设置token
    // console.log('请求前：')
    // console.log(config)
    config.headers['token'] = getToken('token')
    return config
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
})


// 添加响应拦截器
service.interceptors.response.use((response) => {
    // 对响应数据做些什么
    // console.log(response)
    let status, message = response.data
    if (status != 200) {
        Message({ message: message || 'error', type: 'warning' })
    }
    return response
}, (error) => {
    // 对响应错误做些什么
    return Promise.reject(error)
})

export default service