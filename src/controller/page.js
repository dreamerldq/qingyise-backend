const page404 = () => {
  return async (ctx) => {
    ctx.body = '404 page'
  }
}

const pageHello = () =>{
  return async (ctx) => {
    ctx.body = 'hello world page !'
  }
}
export {
  page404,
  pageHello
}