const model = require('../../middleware/model');
exports.render = async function (ctx, next) {
    let promises = [
        model.article.findAll({
            limit: 4,
            offset: 0,
            attributes: ['index', 'title', 'description', 'bg_url', 'click_count'],
            'include': [
                {
                    'model': model.relationship_tag,
                    attributes: ['tag_id'],
                    'include': [
                        {
                            'model': model.tag,
                            attributes: ['title']
                        }
                    ]
                }
            ]
        }),
        model.recommend.findAll({
            limit: 8,
            offset: 0
        }),
        model.tag.findAll({
            limit: 100,
            offset: 0,
        })
    ]
    let results = await Promise.all(promises)
    console.log(results)
    await ctx.render('page/home/index', {
            title: '博客首页',
            originalList: results[0].map(x => {
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
            }),
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
            articleRecommendList: results[1].map(x => {
                return {
                    title: x.title,
                    from: x.source,
                    detail: x.description,
                    href: x.url
                }
            }),
            otherWebsite: [
                {href: 'www.qq.com', name: '慕课网', color: '#eee'},
                {href: 'www.qq.com', name: '慕课网 imooc', color: '#f8ff2a'},
                {href: 'www.qq.com', name: '阮一峰网络日志', color: '#ffe88f'},
                {href: 'www.qq.com', name: '阮一峰网络日志', color: '#b0ff54'},
                {href: 'www.qq.com', name: '新空间新生活', color: '#69b5ff'}
            ],
            category: results[2].map(x => {
                return {
                    href: x.url,
                    name: x.title,
                    color: x.color
                }
            })
        }
    )
}
;