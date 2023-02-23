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

// 通过id删除学生列表表项
export function delStudentById(id){
    return service({
        method:'delete',
        url: `/students/${id}`
    })
}