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
        // await ctx.render('page/statistics/originalList', {
        //     title: '文章归档',
        //     article: [
        //         {
        //             year: 2018,
        //             monthList: [
        //                 {
        //                     month: 1,
        //                     article: [
        //                         {title: 'Win10突然断开Wifi并无法连接的解决办法', href: 'www.baidu.com', date: 1},
        //                         {title: 'Win10突然断开Wifi并无法连接的解决办法', href: 'www.baidu.com', date: 3},
        //                         {title: 'Win10突然断开Wifi并无法连接的解决办法', href: 'www.baidu.com', date: 5}
        //                     ]
        //                 }
        //             ]
        //         }
        //     ],
        //     calcCount: {
        //         categoryCount: 12,
        //         messageCount: 132,
        //         articleCount: 12,
        //         readCount: 1321
        //     }
        // });

        const pageResult = await Promise.all([
            await tagServer.getDataListAndCount(),
            await articleServer.getReadCountSub(),
            await articleServer.getDataListAndCount()
        ]);
        const result = pageResult[2].rows;
        const list = [];
        const cache = {year: '', month: ''};
        let yearItem;
        const reg = /^(\d+)\/(\d+)\/(\d+)/;

        for (let value of result) {
            var currentResult = reg.exec(value.index);
            if (currentResult) {
                if (!cache.year || !cache.month) {
                    cache.year = currentResult[1];
                    cache.month = currentResult[2];
                    yearItem = {
                        year: currentResult[1],
                        monthList: [{
                            month: currentResult[2],
                            article: []
                        }]
                    }
                }

                if (cache.year === currentResult[1]) {
                    //年份没有变化
                    if (cache.month === currentResult[2]) {
                        //月份未变化
                        yearItem.monthList[yearItem.monthList.length - 1].article.push(value)
                    } else {
                        //月份变化
                        yearItem.monthList.push({
                            month: currentResult[2],
                            article: []
                        });
                        cache.month = currentResult[2]
                        yearItem.monthList[yearItem.monthList.length - 1].article.push(value)
                    }
                } else {
                    //年份变化，月份也变
                    list.push(JSON.parse(JSON.stringify(yearItem)))
                    cache.yaer = currentResult[1], cache.month = currentResult[2]
                    yearItem = {
                        year: currentResult[1],
                        monthList: [{
                            month: currentResult[2],
                            article: []
                        }]
                    };
                    yearItem.monthList[yearItem.monthList.length - 1].article.push(value)
                }
            }
        }
        list.push(JSON.parse(JSON.stringify(yearItem)));

        const calcCount = {
            articleCount: pageResult[2].count,
            categoryCount: pageResult[0].count,
            readCount: pageResult[1]
        };

        await ctx.render('page/statistics/originalList', {
            title: '文章归档',
            article: list,
            calcCount
        })
        /* ctx.body = {
             result,
             list,
             calcCount
         }*/
    },
    async listRender(ctx) {
        let page = Number(ctx.query.page) || 1;
        let size = Number(ctx.query.size) || pageConfig.originSize;
        let list = await articleServer.getDataListWithTagCount({
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
