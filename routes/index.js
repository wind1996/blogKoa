const router = require('koa-router')();
const toolController = require('../controller/tool/toolController')
const labController = require('../controller/lab/labController')
const homeController = require('../controller/home/homeController')
const reprintController = require('../controller/article/reprintController')
const originalListController = require('../controller/article/originListController')

router.get('/', homeController.render)
router.get('/original', async (ctx, next) => {
    await ctx.render('article/original', {
        title: 'blog'
    })
})

router.get('/originalL', originalListController.render)
router.get('/reprint', reprintController.render)
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
