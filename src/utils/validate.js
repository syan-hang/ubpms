// 用户名匹配
export function nameRule(rule,value,callback){
    // 输入4-10位昵称
    let reg = /(^[a-zA-Z0-9]{4,10}$)/
    if(value === ''){
        callback(new Error('请输入用户名'))
    }else if(!reg.test(value)){
        callback(new Error('请输入4-10位用户名,仅包含字母和数字'))
    }else{
        callback()
    }
}

// 密码匹配
export function passRule(rule,value,callback){
    // 输入6-12位密码，必须包含大小写及特殊字符_!@#$%^&*~()-+=.
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[_!@#$%^&*`~()\-+=.])[a-zA-Z_!@#$%^&*`~()\-+=.0-9]{6,15}$/
    if(value === ''){
        callback(new Error('请输入密码'))
    }else if(!reg.test(value)){
        callback(new Error('请输入6-15位密码，必须包含大小写字母以及特殊字符_!@#$%^&*~()-+=.'))
    }else{
        callback()
    }
}