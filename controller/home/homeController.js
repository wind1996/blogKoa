exports.render = async function (ctx, next) {
    await ctx.render('page/home/index', {
            title: '博客首页',
            originalList: [
                {
                    href: '/article/2018/05/04/webapackinit',
                    title: 'webpack入门',
                    content: '两分钟入门webpack构建工具',
                    count: 90,
                    bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0',
                    category: [{href: 'www.qq.com', name: '自动化'}, {href: 'www.163.com', name: 'node'}]
                },
                {
                    href: '/article/2017/05/04/webapackinit',
                    title: 'webpack入门',
                    count: 91,
                    content: '两分钟入门webpack构建工具',
                    category: [{href: 'www.qq.com', name: '自动化'}, {name: 'node'}]
                },
                {
                    href: '/article/2017/04/04/gulp',
                    title: 'gulp入门',
                    count: 91,
                    content: '两分钟入门webpack构建工具',
                    category: [{href: 'www.qq.com', name: '自动化'}, {name: 'node'}]
                },
                {
                    href: '/article/2017/04/01/gulp',
                    title: 'gulp入门',
                    count: 91,
                    content: '两分钟入门流式构建工具gulp',
                    category: [{href: 'www.qq.com', name: '自动化'}, {name: 'node'}]
                },
                {
                    href: 'http://www.baidu.com',
                    title: 'koa入门',
                    count: 91,
                    content: '两分钟入门koa，开发全栈应用',
                    category: [{href: 'www.qq.com', name: 'javaScript'}, {name: 'node'}]
                },
                {
                    href: 'http://www.baidu.com',
                    title: 'express入门',
                    count: 91,
                    content: '两分钟入门express入门，开发全栈应用',
                    category: [{href: 'www.qq.com', name: '自动化'}, {name: 'node'}]
                }
            ],
            reprintList: [
                {
                    title: '这是标题',
                    list: [
                        {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                        {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                        {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                        {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                        {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                    ]
                },
                {
                    title: '这是标题',
                    list: [
                        {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                        {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                        {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                        {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                        {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                    ]
                },
                {
                    title: '这是标题',
                    list: [
                        {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                        {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                        {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                        {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                        {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                    ]
                }
            ],
            articleRecommendList: [
                {
                    title: '一周精通VUE JS',
                    from: '掘金',
                    detail: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
                    href: 'www.baidu.com'
                }, {
                    title: '一周精通VUE JS',
                    from: '掘金',
                    detail: 'loremm lorem orem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
                    href: 'www.baidu.com'
                }, {
                    title: '一周精通VUE JS',
                    from: '掘金',
                    detail: 'lorem  lorem lorem loreem lorem lorem lorem lorem ',
                    href: 'www.baidu.com'
                },
                {
                    title: '一周精通VUE JS',
                    from: '掘金18年4月',
                    detail: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
                    href: 'www.baidu.com'
                }
            ],
            otherWebsite: [
                {href: 'www.qq.com', name: '慕课网', color: '#eee'},
                {href: 'www.qq.com', name: '慕课网 imooc', color: '#f8ff2a'},
                {href: 'www.qq.com', name: '阮一峰网络日志', color: '#ffe88f'},
                {href: 'www.qq.com', name: '阮一峰网络日志', color: '#b0ff54'},
                {href: 'www.qq.com', name: '新空间新生活', color: '#69b5ff'}
            ],
            category: [
                {href: '/', name: 'HTML', color: '#eee'},
                {href: '/', name: 'CSS', color: '#ee4'},
                {href: '/', name: 'JavaScript', color: '#e3e'},
                {href: '/', name: 'Node js', color: '#e44'},
                {href: '/', name: 'Koa', color: '#23e'},
                {href: '/', name: 'Express', color: '#9ee'},
            ]
        }
    )
}
;