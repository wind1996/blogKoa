const {originListAdapter, linkAdapter, recommendAdapter, tagAdapter} = require('../../common/Adapter');
const articleServer = require('../../service/articleServer');
const recommendServer = require('../../service/recommendServer');
const tagServer = require('../../service/tagServer');
const linkServer = require('../../service/linkServer');
const pageConfig = require('../../config/config').home;
module.exports = {
    async render(ctx, next) {
        const homePageData = await Promise.all([
            articleServer.getDataListWithTagCount({
                page: 1,
                size: pageConfig.originSize,
                query: {
                    article_type: 'article'
                }
            }),
            recommendServer.getDataList({
                page: 1,
                size: pageConfig.recommendSize,
            }),
            tagServer.getDataListAndCount({
                page: 1
            }),
            articleServer.getDataListWithTagCount({
                page: 1,
                size: pageConfig.hotOriginSize,
                query: {
                    article_type: 'article'
                }
            }),
            linkServer.getDataList({
                page: 1,
                size: pageConfig.LinkSize
            }),
        ]);
        await ctx.render('page/home/index', {
            title: '博客首页',
            originalList: originListAdapter(homePageData[0]),
            articleRecommendList: recommendAdapter(homePageData[1]),
            otherWebsite: linkAdapter(homePageData[4]),
            category: tagAdapter(homePageData[2].rows),
            hotArticle: homePageData[3]
        })
    }
};