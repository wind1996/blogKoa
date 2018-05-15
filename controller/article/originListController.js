const originList = {};
originList.recordRender = async function (ctx, next) {
    await ctx.render('page/statistics/originalList', {
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

/**
 * 原创文章列表
 * @param ctx
 * @param next
 * @returns {Promise<*>}
 */
originList.listRender = async function (ctx, next) {
    let list = await require('../../service/articleServer').getArticleList({}, {
        calcData(list) {
            return list.map(x => {
                return {
                    href: x.index,
                    title: x.title,
                    content: x.description,
                    count: x.click_count,
                    bg: x.bg_url,
                    category: x.relation_tags.map(xx => {
                        return {
                            href: `/tag/${xx.tag.key_word}`,
                            name: xx.tag.title
                        }

                    })
                }
            })
        }
    });

    await ctx.render('page/article/original', {
        title: 'blog',
        articleList: list,
        category: [
            {href: '/', name: 'HTML', color: '#eee'},
            {href: '/', name: 'CSS', color: '#ee4'},
            {href: '/', name: 'JavaScript', color: '#e3e'},
            {href: '/', name: 'Node js', color: '#e44'},
            {href: '/', name: 'Koa', color: '#23e'},
            {href: '/', name: 'Express', color: '#9ee'},
        ]
    })
};
originList.getStatistics = async function (ctx, next) {
    ctx.body = {
        data: 9999
    }
};
originList.listAlbum = async function (ctx, next) {
    await ctx.render('page/article/album', {
        title: '专辑'
    })
};
module.exports = originList;
