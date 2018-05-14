const model = require('../../middleware/model')
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

originList.listRender = async function (ctx, next) {
    let list = [
        {
            href: 'http://www.baidu.com',
            title: '标题一',
            content: '百度，最大的中文搜索引擎',
            count: 90,
            bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0',
            category: [{href: 'www.qq.com', name: 'QQ'}, {href: 'www.163.com', name: '网易'}]
        }, {
            href: 'http://www.baidu.com',
            title: '标题一',
            content: '百度，最大的中文搜索引擎',
            count: 90,
            bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0',
            category: [{href: 'www.qq.com', name: 'QQ'}, {href: 'www.163.com', name: '网易'}]
        }, {
            href: 'http://www.baidu.com',
            title: '标题一',
            content: '百度，最大的中文搜索引擎',
            count: 90,
            bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0',
            category: [{href: 'www.qq.com', name: 'QQ'}, {href: 'www.163.com', name: '网易'}]
        }, {
            href: 'http://www.baidu.com',
            title: '标题一',
            content: '百度，最大的中文搜索引擎',
            count: 90,
            bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0',
            category: [{href: 'www.qq.com', name: 'QQ'}, {href: 'www.163.com', name: '网易'}]
        }
    ];
    let result;
    try {
        result = await model.article.findAll();
        if (result) {
            list = result.map(x => {
                return {
                    href: x.index,
                    title: x.title,
                    content: x.description,
                    count: x.click_count,
                    bg: x.bg_url,
                    category: [{href: 'www.qq.com', name: 'QQ'}, {href: 'www.163.com', name: '网易'}]
                }
            })
        }
    } catch (e) {

    }

    let cc = await model.article.findAll()
    console.log(JSON.stringify(cc))
    console.log(JSON.stringify(result))
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
}
originList.getStatistics = async function (ctx, next) {
    ctx.body = {
        data: 9999
    }
};
module.exports = originList;
