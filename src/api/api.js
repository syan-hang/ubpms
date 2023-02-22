import service from '../service.js'

// 登录接口
export function login(data) {
    return service({
        method: 'post',
        url: '/login',
        data
    })
}

// 学生列表查询
export function getStudentList(params){
    return service({
        method:'get',
        url:'/students',
        params
    })

}