import Router from 'koa-router'
import { 
    createArticle,
    getArticles,
    updateArticles,
    deleteArticle,
    articlePage
 } from '../controller/article'
const article = new Router()
article.get('/', articlePage() )
article.post('/', createArticle())
article.post('/:id', updateArticles())

export default article