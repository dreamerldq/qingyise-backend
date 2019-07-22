
import path from  'path'
import { uploadFile } from '../util/upload'

const uploadImage = () =>{
  return  async (ctx) => {
        let result = {
            success: false
        }
        let serverFilePath = path.join(__dirname, '../static')
        result = await uploadFile(ctx, {
            fileType: 'image',
            path: serverFilePath
        })
        ctx.body = result
      
      }
}
export { uploadImage }