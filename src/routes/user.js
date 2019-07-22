import Router from 'koa-router'
import { createUser, getUsers } from '../controller/user'
const user = new Router()
user.get('/create', createUser())
user.get('/get', getUsers())

export default user