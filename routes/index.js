const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    await ctx.render('home/index', {
        title: 'blog'
    })
})
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
router.get('/tool', async (ctx, next) => {
    await ctx.render('tool/tool', {
        title: 'blog'
    })
})
router.get('/lab', async (ctx, next) => {
    await ctx.render('lab/lab', {
        title: 'blog'
    })
})

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
