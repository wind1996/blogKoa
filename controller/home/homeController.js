exports.render = async function (ctx, next) {
    let promises = [
        require('../../service/articleServer').getArticleList({
            page: 1,
            size: 4
        }, {
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
        }),
        require('../../service/recommendServer').getRecommendList({
            page: 1,
        }, {
            calcData(list) {
                return list.map(x => {
                    return {
                        title: x.title,
                        from: x.source,
                        detail: x.description,
                        href: x.url
                    }
                })
            }
        }),
        require('../../service/tagServer').getTagList({
            page: 1,
        }, {
            calcData(list) {
                return list.map(x => {
                    return {
                        href: x.url,
                        name: x.title,
                        color: x.color
                    }
                })
            }
        }),
        require('../../service/articleServer').getArticleList({
            page: 1,
            size: 10
        }),
    ];
    let results = await Promise.all(promises);
    console.log(results);
    await ctx.render('page/home/index', {
            title: '博客首页',
            originalList: results[0],
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
            articleRecommendList: results[1],
            otherWebsite: [
                {href: 'www.qq.com', name: '慕课网', color: '#eee'},
                {href: 'www.qq.com', name: '慕课网 imooc', color: '#f8ff2a'},
                {href: 'www.qq.com', name: '阮一峰网络日志', color: '#ffe88f'},
                {href: 'www.qq.com', name: '阮一峰网络日志', color: '#b0ff54'},
                {href: 'www.qq.com', name: '新空间新生活', color: '#69b5ff'}
            ],
            category: results[2],
            hotArticle: results[3]
        }
    )
}
;