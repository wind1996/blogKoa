var db = require('../../middleware/db');
var lab = {};

lab.render = async function (ctx, next) {
    let page = Number(ctx.query.page) || 1;
    let size = Number(ctx.query.size) || 8;
    let list = await require('../../service/labServer')
        .getDataList({
            page,
            size
        }, {
            calcData(list) {
                return list.map(x => {
                    return {
                        href: x.url,
                        title: x.title,
                        content: x.description,
                        bg: x.bg_url
                    }
                })
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
};

lab.categoryRender = async function (ctx, next) {
    let page = Number(ctx.query.page) || 1;
    let size = Number(ctx.query.size) || 8;
    let list = await require('../../service/labServer').getDataList({page, size})
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
};

module.exports = lab