const {originListAdapter, articleThroughTagAdapter} = require('../../common/Adapter');
const articleServer = require('../../service/articleServer');
const tagServer = require('../../service/tagServer');
const pageConfig = require('../../config/config').article;
/**
 * 原创文章列表
 * @param ctx
 * @param next
 * @returns {Promise<*>}
 */
const originList = {
    async recordRender(ctx) {
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
    },
    async listRender(ctx) {
        let page = Number(ctx.query.page) || 1;
        let size = Number(ctx.query.size) || pageConfig.originSize;
        let list = await articleServer.getDataList({
            page, size, query: {
                article_type: 'article'
            }
        }, {
            calcData(list) {
                return originListAdapter(list)
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
    },
    async getStatistics(ctx) {
        ctx.body = {
            data: 9999
        }
    },
    async listAlbum(ctx) {
        await ctx.render('page/article/album', {
            title: '专辑'
        })
    },
    async getArticleByTag(ctx) {
        const {tag} = ctx.params;
        let page = Number(ctx.query.page) || 1;
        let size = Number(ctx.query.size) || 8;
        let {rows, count} = await tagServer.getArticleListByTag({page, size}, tag);
        await  ctx.render('page/article/tag', {
            title: `原创文章/${tag}`,
            articleList: articleThroughTagAdapter(rows),
            paginate: {
                currentPage: page,
                baseUrl: `/tag/${tag}?size=${size}&page=`,
                sumPage: Math.ceil(count / size)
            }
        })
    }
};
module.exports = originList;
