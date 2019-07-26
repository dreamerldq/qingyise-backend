
import db from '../models'

const createUser = () => {
    return async (ctx) => {
    const firstName = 'wang'
    const lastName = 'shuai'
    db.User.create({
        firstName,
        lastName,
        email:'lidanqiu96@foxmail.com'
      }).then((res) =>{
        console.log("这是新创建的用户ID是", res.id)
      })    }
}

const getUsers = () => {
    return async (ctx) => {
      const users = await  db.User.findAll()
      console.log(JSON.stringify(users, null, 4))
          ctx.body = JSON.stringify(users, null, 4)
    }
}

// const deleteUser = () => {
//     return async (ctx) => {
//         const user = await db.User.findOne()
//     }
// }

export {
    createUser,
    getUsers
}