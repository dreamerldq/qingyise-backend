
import path from  'path'
import { uploadFile } from '../util/upload'

const uploadImage = () =>{
  return  async (ctx) => {
      if(ctx.session.user = 'lidnaqiu'){
          console.log("用户已经登录")
        let result = {
            success: false
        }
        let serverFilePath = path.join(__dirname, '../static')
        result = await uploadFile(ctx, {
            fileType: 'image',
            path: serverFilePath
        })
        ctx.body = result
      }else{
          ctx.body = {
              success: false,
              msg: '没有登录'
          }
          
      }
       
      
      }
}
export { uploadImage }