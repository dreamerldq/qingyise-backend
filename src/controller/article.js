
import db from '../models'

const createArticle = () => {
    return async (ctx) => {
        const { title, content, subTitle } = ctx.request.body
    const article = await db.Article.create({
        title,
        content,
        subTitle
      })
      console.log("新创建的文章", article)
      ctx.body = {
        success: true,
        msg:'请求成功',
        data: article
    } 
    }
}

const articlePage = () => {
    return async (ctx) => {
       await  ctx.render('article')
    }
}

const getArticles = () => {
    return async (ctx) => {
      const articles = await  db.Article.findAll()
      const data = JSON.stringify(articles, null, 4)
      ctx.body = {
          success: true,
          msg:'请求成功',
          data
      }
    }
}

const updateArticles = () => {
   
    return async (ctx) => {
        const { title, content, subTitle } = ctx.request.body
        const article = await db.Article.update({
            title,
            content,
            subTitle
        })
    }
}

const deleteArticle = () => {
    return async (ctx) => {
        const { id } = ctx.request.body
        const article = await db.Article.destroy({id})
    }
}

export {
    createArticle,
    getArticles,
    updateArticles,
    deleteArticle,
    articlePage
}