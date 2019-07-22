import Koa  from'koa'
import chalk  from'chalk'
import bodyParser  from'koa-bodyparser'
import koaStatic  from'koa-static'
import path  from'path'
import views  from'koa-views'
import Sequelize from 'sequelize'

import Router from 'koa-router'
import endTime from './middleware/endtime'
import router from './routes/index'

const { Model } = Sequelize

const app = new Koa();



  


  // sequelize.sync()




const staticPath = './static'
app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))
  
app.use(koaStatic(
    path.join( __dirname,  staticPath)
  ))
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())


// const connectDB = () => {
//   const client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'postgres',
//     password: 'muse0106',
//     port: 5432,
//   })
//   client.connect()
//   return client
// }

// const queryDB = async () => {
//   const client = connectDB()
//   const data = await client.query('SELECT NOW()')
//   console.log("AAAA", data)
//   await client.end()
// }
// queryDB()
app.listen(3000, ()=>{
    console.log(`server is running at ${chalk.green('http://localhost:3000')}` )
});