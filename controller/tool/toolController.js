const toolController = {}

toolController.render = async function (ctx, next) {
    await ctx.render('page/tool/tool', {
        title: '博客-资源工具',
        role: '开发',
        list: [
            {
                href: 'http://www.baidu.com',
                title: 'MDN',
                content: '火狐开发者网站',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }, {
                href: 'http://www.bootcss.com/',
                title: 'bootstrap',
                content: 'bootstrap官网',
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
            baseUrl: '/tool?page='
        }
    })
};
toolController.categoryRender = async function (ctx, next) {
    await ctx.render('page/statistics/toolSummary', {
        title: '博客-资源分类汇总',
        role: '开发',
        list: [
            {
                href: 'http://www.baidu.com',
                title: 'MDN',
                content: '火狐开发者网站',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }, {
                href: 'http://www.bootcss.com/',
                title: 'bootstrap',
                content: 'bootstrap官网',
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
            baseUrl: '/tool?page='
        }
    })
};

module.exports = toolController

function f() {
    console.log(4444)
}