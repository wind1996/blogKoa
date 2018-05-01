const router = require('koa-router')();
const toolController = require('../controller/toolController')
const labController = require('../controller/labController')
const homeController = require('../controller/homeController')

router.get('/', homeController.render)
router.get('/original', async (ctx, next) => {
    await ctx.render('article/original', {
        title: 'blog'
    })
})

router.get('/originalL', async (ctx, next) => {
    await ctx.render('article/originalList', {
        title: '文章归档'
    })
})
router.get('/reprint', async (ctx, next) => {
    await ctx.render('article/reprint', {
        title: 'blog'
    })
})
router.get('/tool', toolController.render);
router.get('/lab', labController.render);

router.get('/about', async (ctx, next) => {
    ctx.body = '介绍页'
})
router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})


module.exports = router
