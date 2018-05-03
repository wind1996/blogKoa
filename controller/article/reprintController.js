exports.render = async function (ctx, next) {
    await ctx.render('article/reprint', {
        title: '博客-转载',
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
        articleRecommendList: [],
        pagination: {
            size: 10,
            sumPage: 100,
            currentPage: 1,
            baseUrl: '/reprint?page='
        }
    })
};