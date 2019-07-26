
import Router from 'koa-router'
const login = new Router()
import {  
    loginPage,
    loginCheck
 } from '../controller/login'
login.get('/', loginPage())
login.post('/check', loginCheck())
export default login