const loginCheck= () => {
    return async (ctx) =>  {
        const { username, password } = ctx.request.body
        console.log("AAA", ctx.request.body)
        if(username === 'lidanqiu' && password === '123'){
            ctx.session.user = username;
            ctx.body = { success: true, msg: '登录成功！' };
        }else{
            ctx.body = {
                success: false,
                msg: '账号或者密码错误'
            }
        }
    }
}

const loginPage = () => {
    return async (ctx) => {
        await ctx.render('login')
    }
}

const logout = () => {
    return async (ctx) => {
        ctx.session
    }
}

export {
    loginPage,
    loginCheck
}