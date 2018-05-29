const model = require('../../middleware/model');
const tagServer = require('../../service/tagServer')
const statisticsController = {
    async renderTagPage(ctx, next) {
        let list = await tagServer.getDataListAndCount();
        await ctx.render('page/statistics/tag', {
            title: '标签大全',
            tagList: list.rows
        })
    }
};
module.exports = statisticsController;