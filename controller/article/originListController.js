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
    let page = Number(ctx.query.page) || 1;
    let size = Number(ctx.query.size) || 8;
    let list = await require('../../service/articleServer').getDataList({page, size}, {
        calcData(list) {
            return list.map(x => {
                return {
                    href: `/article/${x.index}`,
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
        title: '原创文章',
        articleList: list,
        paginate: {
            currentPage: page,
            baseUrl: `/original?size=${size}&page=`,
            sumPage: Math.ceil(list.count / size)
        }
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

originList.getArticleByTag = async function (ctx, next) {
    const {tag} = ctx.params;
    let page = Number(ctx.query.page) || 1;
    let size = Number(ctx.query.size) || 8;

    let {rows, count} = await require('../../service/tagServer').getArticleListByTag({page, size}, tag);
    let list = rows.map(x => {
        return {
            href: `/article/${x.article.index}`,
            title: x.article.title,
            content: x.article.description,
            count: x.article.click_count,
            bg: x.article.bg_url,
            category: x.article.relation_tags.map(xx => {
                return {
                    href: `/tag/${xx.tag.key_word}`,
                    name: xx.tag.title
                }

            })
        }
    })
    await ctx.render('page/article/tag', {
        title: `原创文章/${tag}`,
        articleList: list,
        paginate: {
            currentPage: page,
            baseUrl: `/tag/${tag}?size=${size}&page=`,
            sumPage: Math.ceil(count / size)
        }
    })
    // ctx.body = {list,count}
};
module.exports = originList;
