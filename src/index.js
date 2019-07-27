import Koa  from'koa'
import chalk  from'chalk'
import bodyParser  from'koa-bodyparser'
import koaStatic  from'koa-static'
import path  from'path'
import views  from'koa-views'
import Sequelize from 'sequelize'
import session from 'koa-session'
import { ApolloServer, gql } from 'apollo-server-koa';
import db from './models/index'
import Router from 'koa-router'
import endTime from './middleware/endtime'
import router from './routes/index'
import user from './routes/user';

const { Model } = Sequelize


const typeDefs = gql`
  type Query {
    hello: String,
    getUsers: [User]!
  }
  type Mutation {
    addUser(firstName: String, lastName:String, email:String): Response!
  }
  type User {
      firstName: String,
      lastName: String,
      id: ID,
      email: String
  }
  type Article {
      title: String,
      subTitle: String,
      content: String
  }
  type Response{
      success: Boolean!,
      getUsers:[User]!
  }
`;




// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    getUsers: async () => {
        const users = await db.User.findAll({})
        // console.log('USES', users)
        return users
    }
  },
  Mutation: {
    addUser: async (_, {firstName, lastName, email}) => {
        console.log(firstName, lastName, email);
        const user =  await  db.User.create({
            firstName,
            lastName,
            email,
        })
        console.log("这是新创建的user",user)
        const users = await db.User.findAll({})
        
        return {
            success: true,
            getUsers:users
        }
    },
}
};
 
const server = new ApolloServer({ typeDefs, resolvers });

const app = new Koa();
server.applyMiddleware({ app });
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
    console.log(`server is running at ${chalk.green('http://localhost:3000')}
    graphql is Server ready at http://localhost:4000${server.graphqlPath}` )
});