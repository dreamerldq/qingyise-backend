import Koa  from'koa'
import chalk  from'chalk'
import bodyParser  from'koa-bodyparser'
import koaStatic  from'koa-static'
import path  from'path'
import views  from'koa-views'
import Sequelize from 'sequelize'
import session from 'koa-session'

import Router from 'koa-router'
import endTime from './middleware/endtime'
import router from './routes/index'

const { Model } = Sequelize

const app = new Koa();
app.keys = ['this is sercet keys'];

app.use(session({
    key: 'session_id', /** cookie的名称，可以不管 */
    maxAge: 60* 60 * 24 * 7, /** (number) maxAge in ms (default is 1 days)，cookie的过期时间，这里表示2个小时 */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
  },app));

const staticPath = './static'
app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))
  
app.use(koaStatic(
    path.join( __dirname,  staticPath)
  ))
  app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, ()=>{
    console.log(`server is running at ${chalk.green('http://localhost:3000')}` )
});