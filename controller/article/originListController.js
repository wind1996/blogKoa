const originList = {};

originList.recordRender = async function (ctx, next) {
    await ctx.render('page/article/originalList', {
        title: '文章归档',
        article: [
            {
                year: 2018,
                monthList: [
                    {
                        month: 1,
                        article: [
                            {title: 'Win10突然断开Wifi并无法连接的解决办法', href: 'www.baidu.com', date: 1},
                            {title: 'Win10突然断开Wifi并无法连接的解决办法', href: 'www.baidu.com', date: 3},
                            {title: 'Win10突然断开Wifi并无法连接的解决办法', href: 'www.baidu.com', date: 5}
                        ]
                    },
                    {
                        month: 2,
                        article: [
                            {title: 'Win10突然断开Wifi并无法连接的解决办法', href: 'www.baidu.com', date: 1},
                            {title: 'Win10突然断开Wifi并无法连接的解决办法', href: 'www.baidu.com', date: 3},
                            {title: 'Win10突然断开Wifi并无法连接的解决办法', href: 'www.baidu.com', date: 5},
                            {title: 'Win10突然断开Wifi并无法连接的解决办法', href: 'www.baidu.com', date: 7}
                        ]
                    },
                    {
                        month: 3,
                        article: [
                            {title: 'Win10突然断开Wifi并无法连接的解决办法', href: 'www.baidu.com', date: 1},
                            {title: 'Win10突然断开Wifi并无法连接的解决办法', href: 'www.baidu.com', date: 3},
                            {title: 'Win10突然断开Wifi并无法连接的解决办法', href: 'www.baidu.com', date: 5}
                        ]
                    },
                    {
                        month: 4,
                        article: [
                            {title: 'title', href: 'www.baidu.com', date: 1},
                            {title: 'title', href: 'www.baidu.com', date: 3},
                            {title: 'title', href: 'www.baidu.com', date: 5}
                        ]
                    },
                    {
                        month: 5,
                        article: [
                            {title: 'title', href: 'www.baidu.com', date: 1},
                            {title: 'title', href: 'www.baidu.com', date: 3},
                            {title: 'title', href: 'www.baidu.com', date: 5}
                        ]
                    },
                    {
                        month: 6,
                        article: [
                            {title: 'title', href: 'www.baidu.com', date: 1},
                            {title: 'title', href: 'www.baidu.com', date: 3},
                            {title: 'title', href: 'www.baidu.com', date: 5}
                        ]
                    },
                    {
                        month: 7,
                        article: [
                            {title: 'title', href: 'www.baidu.com', date: 1},
                            {title: 'title', href: 'www.baidu.com', date: 3},
                            {title: 'title', href: 'www.baidu.com', date: 5}
                        ]
                    }
                ]
            },
            {
                year: 2017,
                monthList: [
                    {
                        month: 1
                    },
                    {
                        month: 2,
                        article: []
                    },
                    {
                        month: 3,
                        article: [
                            {title: 'title', href: 'www.baidu.com', date: 1},
                            {title: 'title', href: 'www.baidu.com', date: 3},
                            {title: 'title', href: 'www.baidu.com', date: 5}
                        ]
                    },
                    {
                        month: 4,
                        article: [
                            {title: 'title', href: 'www.baidu.com', date: 1},
                            {title: 'title', href: 'www.baidu.com', date: 3},
                            {title: 'title', href: 'www.baidu.com', date: 5}
                        ]
                    },
                    {
                        month: 5,
                        article: [
                            {title: 'title', href: 'www.baidu.com', date: 1},
                            {title: 'title', href: 'www.baidu.com', date: 3},
                            {title: 'title', href: 'www.baidu.com', date: 5}
                        ]
                    },
                    {
                        month: 6,
                        article: [
                            {title: 'title', href: 'www.baidu.com', date: 1},
                            {title: 'title', href: 'www.baidu.com', date: 3},
                            {title: 'title', href: 'www.baidu.com', date: 5}
                        ]
                    },
                    {
                        month: 7,
                        article: [
                            {title: 'title', href: 'www.baidu.com', date: 1},
                            {title: 'title', href: 'www.baidu.com', date: 3},
                            {title: 'title', href: 'www.baidu.com', date: 5}
                        ]
                    }
                ]
            }
        ],
        calcCount: {
            categoryCount: 12,
            messageCount: 132,
            articleCount: 12,
            readCount: 1321
        }
    })
};

originList.listRender = async function (ctx, next) {
    await ctx.render('page/article/original', {
        title: 'blog'
    })
}
originList.getStatistics = async function (ctx, next) {
    ctx.body = {
        data: 9999
    }
};
module.exports = originList;
