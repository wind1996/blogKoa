exports.render = async function (ctx, next) {
    await ctx.render('home/index', {
        title: '博客首页',
        originalList: [
            {
                href: 'http://www.baidu.com',
                title: '百度一下',
                content: '百度，最大的中文搜索引擎',
                count: 90,
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0',
                category: [{href: 'www.qq.com', name: 'QQ'}, {href: 'www.163.com', name: '网易'}]
            },
            {
                href: 'http://www.baidu.com',
                title: '京东商城',
                count: 91,
                content: '京东商城，最大的电子产品商城,京东商城，最大的电子产品商城'
            },
            {
                href: 'http://www.baidu.com',
                title: '天猫',
                count: 94,
                content: '天猫，最大的商城,京东商城，最大的电子产品商城,京东商城，最大的电子产品商城'
            },
            {
                href: 'http://www.baidu.com',
                count: 98,
                title: '苏宁易购',
                content: '苏宁易购，最大的中文搜索引擎,天猫，最大的商城,京东商城，最大的电子产品商城,京东商城，最大的电子产品商城'
            }
        ],
        reprintList: [
            {
                title: '这是标题',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0',
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
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0',
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
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0',
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
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0',
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
        otherWebsite: [
            {href: 'www.qq.com', name: '慕课网 imooc'},
            {href: 'www.qq.com', name: '慕课网 imooc'},
            {href: 'www.qq.com', name: '阮一峰网络日志'},
            {href: 'www.qq.com', name: '阮一峰网络日志'},
            {href: 'www.qq.com', name: '新空间新生活'},
            {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
            {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
            {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
            {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
        ]
    })
};