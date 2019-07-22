import Router from 'koa-router'

const router = new Router()
import home  from './home'
import page  from './page'
import upload  from './upload'
import user from './user'
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())
router.use('/upload', upload.routes(), upload.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())


export default router