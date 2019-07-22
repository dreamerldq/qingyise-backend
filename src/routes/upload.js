import Router from 'koa-router'

const upload = new Router()
import { uploadImage } from '../controller/upload'
upload.post('/image', uploadImage())

export default upload