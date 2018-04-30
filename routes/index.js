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
        title: 'blog',
        list: [
            {
                href: 'http://www.baidu.com',
                title: '百度一下',
                content: '百度，最大的中文搜索引擎',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }, {
                href: 'http://music.163.com',
                title: '网易云音乐',
                content: '网易云音乐，听你想听的歌',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }, {
                href: 'http://music.163.com',
                title: '网易云音乐',
                content: '网易云音乐，听你想听的歌',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }, {
                href: 'http://music.163.com',
                title: '网易云音乐',
                content: '网易云音乐，听你想听的歌',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }, {
                href: 'http://music.163.com',
                title: '网易云音乐',
                content: '网易云音乐，听你想听的歌',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }, {
                href: 'http://music.163.com',
                title: '网易云音乐',
                content: '网易云音乐，听你想听的歌',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }
        ],
        pagination: {
            size: 10,
            sumPage: 100,
            currentPage: 1,
            baseURI: '/original?page='
        }
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
