import service from '../service.js'

export function login(data) {
    return service({
        method: 'post',
        url: '/login',
        data
    })
}