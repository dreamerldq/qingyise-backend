
import User from '../models/User'
const createUser = () => {
    return async (ctx) => {
    const firstName = 'wang'
    const lastName = 'shuai'
    User.create({
        firstName,
        lastName
      }).then((res) =>{
        console.log("这是新创建的用户ID是", res.id)
      })    }
}

const getUsers = () => {
    return async (ctx) => {
      const users = await  User.findAll()
      console.log(JSON.stringify(users, null, 4))
          ctx.body = JSON.stringify(users, null, 4)
    }
}

export {
    createUser,
    getUsers
}