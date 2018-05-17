const model = require('../../middleware/model');
var statisticsController = {};
statisticsController.renderTagPage = async function (ctx, next) {
    let list = await require('../../service/tagServer').getDataList();
    await ctx.render('page/statistics/tag', {
        title: '标签大全',
        tagList: list
    })
};
module.exports = statisticsController;