const toolController = {}

toolController.render = async function (ctx, next) {
    let type = ctx.query.type || '';
    let page = Number(ctx.query.page || 1);
    let query = {};
    if (type) {
        Object.assign(query, {
            type
        })
    }
    let list = await require('../../service/toolServer').getToolList({
        query,
        page,
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
    await ctx.render('page/tool/tool', {
        title: '博客-资源工具',
        role: '开发',
        list: list,
        pagination: {
            size: 10,
            sumPage: 100,
            currentPage: page,
            baseUrl: `/tool?type=${type}&page=`
        }
    })
};
toolController.categoryRender = async function (ctx, next) {
    let type = ctx.query.type || '';
    let page = Number(ctx.query.page || 1);
    let query = {};

    if (type) {
        Object.assign(query, {
            type
        })
    }
    let list = await require('../../service/toolServer').getToolList({
        page,
        query
    });

    await ctx.render('page/statistics/toolSummary', {
        title: '博客-资源分类汇总',
        role: '开发',
        list: list,
        pagination: {
            size: 10,
            sumPage: 100,
            currentPage: page,
            baseUrl: `/tool/category?type=${type}&page=`
        }
    })
};

module.exports = toolController;