

import Router from 'koa-router'
const page = new Router()
import { page404, pageHello } from '../controller/page'
page.get('/404', page404())
page.get('/hello', pageHello())
export default page