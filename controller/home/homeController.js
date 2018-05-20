const {originListAdapter, linkAdapter, recommendAdapter, tagAdapter} = require('../../common/Adapter');
const articleServer = require('../../service/articleServer');
const recommendServer = require('../../service/recommendServer');
const tagServer = require('../../service/tagServer');
const linkServer = require('../../service/linkServer');
module.exports = {
    async render(ctx, next) {
        const homePageData = await Promise.all([
            articleServer.getDataList({
                page: 1,
                size: 6,
                query: {
                    article_type: 'article'
                }
            }),
            recommendServer.getDataList({
                page: 1,
            }),
            tagServer.getDataList({
                page: 1,
            }),
            articleServer.getDataList({
                page: 1,
                size: 10,
                query: {
                    article_type: 'article'
                }
            }),
            linkServer.getDataList({
                page: 1,
                size: 10
            }),
        ]);
        await ctx.render('page/home/index', {
            title: '博客首页',
            originalList: originListAdapter(homePageData[0]),
            articleRecommendList: recommendAdapter(homePageData[1]),
            otherWebsite: linkAdapter(homePageData[4]),
            category: tagAdapter(homePageData[2]),
            hotArticle: homePageData[3]
        })
    }
};