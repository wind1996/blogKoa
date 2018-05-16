exports.render = async function (ctx, next) {
    const homePageData = await Promise.all([
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
        require('../../service/linkServer').getLinkList({
            page: 1,
            size: 10
        }, {
            calcData(list) {
                return list.map(x => {
                    return {
                        href: x.url, name: x.title, color: x.color
                    }
                })
            }
        }),
    ]);
    await ctx.render('page/home/index', {
            title: '博客首页',
            originalList: homePageData[0],
            // reprintList: [],
            articleRecommendList: homePageData[1],
            otherWebsite: homePageData[4],
            category: homePageData[2],
            hotArticle: homePageData[3]
        }
    )
}
;