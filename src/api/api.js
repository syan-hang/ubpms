import service from '../service.js'
import qs from 'qs';

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

// 信息列表查询
export function getInfoList(params){
    return service({
        method:'get',
        url:'/info',
        params
    })
}
// 信息列表删除
export function delInfoByid(id){
    return service({
        method:'delete',
        url: `/info/${id}`
    })
}

// 信息列表添加
// 由于后端原因，这里需要使用qs模块进行处理，正式项目中一般不需要
export function addInfo(obj){
    let data = qs.stringify(obj)
    return service({
        method:'post',
        url:'/info',
        data
    })
}

// 信息列表修改
// 由于后端原因，这里需要使用qs模块进行处理，正式项目中一般不需要
export function fixInfo(obj){
    let data = qs.stringify(obj)
    return service({
        method:'put',
        url:'/info',
        data
    })
}