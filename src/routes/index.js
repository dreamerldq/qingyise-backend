import Router from 'koa-router'

const router = new Router()
import home  from './home'
import page  from './page'
import upload  from './upload'
import user from './user'
import login from './login'
import article from './article'
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())
router.use('/upload', upload.routes(), upload.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())
router.use('/login', login.routes(), login.allowedMethods())
router.use('/article', article.routes(), article.allowedMethods())

export default router