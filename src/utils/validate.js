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

// 真实姓名匹配
export function realNameRule(rule,value,callback){
    // 2-16个字符，包含·以及大小写英文字母
    let reg = /^(?:[a-zA-Z\u4e00-\u9fa5·]{2,16})$/
    if(value===''){
        callback(new Error('请输入姓名'))
    }else if(!reg.test(value)){
        callback(new Error('合法姓名: 2-16个字符，包含·以及大小写英文字母'))
    }else{
        callback()
    }
}

// 可选真实姓名匹配
export function optRealNameRule(rule,value,callback){
    // 2-16个字符，包含·以及大小写英文字母 (可以为空，或者2-16个符合要求的字符)
    let reg = /^(?:[a-zA-Z\u4e00-\u9fa5·]{2,16})$/
    if(value != '' && !reg.test(value)){
        callback(new Error('合法姓名: 2-16个字符，包含·以及大小写英文字母'))
    }else{
        callback()
    }
}

// 年龄匹配
export function ageRule(rule,value,callback){
    // 0-200 岁
    if(value===''){
        callback(new Error('请输入年龄'))
    }else if(!(value>=0 && value<200)){
        callback(new Error('请输入合法年龄:0-200'))
    }else{
        callback()
    }
}

// 可选手机号码匹配
export function optPhoneRule(rule,value,callback){
    // 2-16个字符，包含·以及大小写英文字母 (可以为空，或者2-16个符合要求的字符)
    let reg = /^(?:(?:\+|00)86)?1\d{10}$/
    if(value != '' && !reg.test(value)){
        callback(new Error('请输入合法手机号'))
    }else{
        callback()
    }
}

// 可选手机号码匹配
export function phoneRule(rule,value,callback){
    // 2-16个字符，包含·以及大小写英文字母 (可以为空，或者2-16个符合要求的字符)
    let reg = /^(?:(?:\+|00)86)?1\d{10}$/
    if(value===''){
        callback("请输入手机号")
    }else if(!reg.test(value)){
        callback(new Error('请输入合法手机号'))
    }else{
        callback()
    }
}