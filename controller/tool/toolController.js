const toolServer = require('../../service/toolServer')

const toolController = {
    async render(ctx, next) {
        let type = ctx.query.type || '';
        let page = Number(ctx.query.page || 1);
        let size = Number(ctx.query.size) || 8;
        let query = {};
        let typeToTxt = {
            dev: '开发',
            life: '生活',
            office: '办公',
            txt: '文档'
        };
        if (type) {
            Object.assign(query, {
                type
            })
        }
        let list = await toolServer.getDataList({
            query,
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
        await ctx.render('page/tool/tool', {
            title: '博客-资源工具',
            role: typeToTxt[type],
            list: list,
            pagination: {
                size: 10,
                sumPage: Math.ceil(list.count / size),
                currentPage: page,
                baseUrl: `/tool?type=${type}&size=${size}&page=`
            }
        })
    },
    async categoryRender(ctx, next) {
        let type = ctx.query.type || '';
        let page = Number(ctx.query.page || 1);
        let size = Number(ctx.query.size) || 40;
        let query = {};

        if (type) {
            Object.assign(query, {
                type
            })
        }
        let list = await toolServer.getDataList({
            page,
            query,
            size
        });

        await ctx.render('page/statistics/toolSummary', {
            title: '博客-资源分类汇总',
            role: '',
            list: list,
            pagination: {
                size: size,
                sumPage: Math.ceil(list.count / size),
                currentPage: page,
                baseUrl: `/tool/category?type=${type}&size=${size}&page=`
            }
        })
    }
};
module.exports = toolController;