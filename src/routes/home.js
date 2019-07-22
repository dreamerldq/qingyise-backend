import Router from 'koa-router'
import { getHome, homePost } from '../controller/home'
const home = new Router()
home.get('/', getHome())
home.post('/', homePost())
export default home