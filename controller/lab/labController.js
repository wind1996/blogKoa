const db = require('../../middleware/db');
const labServer = require('../../service/labServer');
const {labAdapter} = require('../../common/Adapter');
const pageConfig = require('../../config/config').lab;


const lab = {
    async render(ctx) {
        let page = Number(ctx.query.page) || 1;
        let size = Number(ctx.query.size) || pageConfig.pageSize;
        let list = await labServer
            .getDataList({
                page,
                size
            }, {
                calcData(list) {
                    return labAdapter(list)
                }
            });
        await ctx.render('page/lab/lab', {
            title: '博客-实验室',
            list: list,
            pagination: {
                size: size,
                sumPage: Math.ceil(list.count / size),
                currentPage: page,
                baseUrl: `/lab?size=${size}&page=`
            }
        })
    },
    async categoryRender(ctx) {
        let page = Number(ctx.query.page) || 1;
        let size = Number(ctx.query.size) || pageConfig.statisticsSize;
        let list = await labServer.getDataList({page, size});
        await ctx.render('page/statistics/labStatistics', {
            title: '博客-实验室归档',
            list: list,
            pagination: {
                size: 7,
                sumPage: Math.ceil(list.count / size),
                currentPage: page,
                baseUrl: `/lab/category?size=${size}&page=`
            }
        })
    }
};
module.exports = lab;