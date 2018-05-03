exports.render = async function (ctx, next) {
    await ctx.render('tool/tool', {
        title: '博客-资源工具',
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
            baseUrl: '/tool?page='
        }
    })
};


function f() {
    console.log(4444)
}