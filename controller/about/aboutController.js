const {linkTypeFilterAdapter} = require('../../common/Adapter');
const {articleAdapter} = require('../../common/Adapter');
const articleServer = require('../../service/articleServer');
const linkServer = require('../../service/linkServer');
const aboutController = {
    async meRender(ctx) {
        const result = await articleServer.getFullArticleFilterType('me', 'me');
        await ctx.render('page/about/me', {
            title: '站长介绍',
            content: articleAdapter(result)
        });
    },
    async dynamicRender(ctx) {
        await ctx.render('page/about/dynamic', {
            title: '动态'
        })
    },
    async linksRender(ctx) {
        let list = await linkServer.getDataList();
        await ctx.render('page/about/links', {
            title: '友链',
            linkGroup: linkTypeFilterAdapter(list)
        })
    }
};
module.exports = aboutController;