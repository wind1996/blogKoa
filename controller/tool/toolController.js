const toolController = {}
const model = require('../../middleware/model')

toolController.render = async function (ctx, next) {
    let type = ctx.query.type || '';
    let page = Number(ctx.query.page || 1)
    let list;
    try {
        if (type) {
            list = await model.tool.findAll({where: {type: type}});
        } else {
            list = await model.tool.findAll();
        }
        list = list.map(x => {
            return {
                href: x.url,
                title: x.title,
                content: x.description,
                bg: x.bg_url
            }
        })
    } catch (e) {
        list = [
            {
                href: 'http://www.baidu.com',
                title: 'MDN',
                content: '火狐开发者网站',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }
        ];
    }
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
    let page = Number(ctx.query.page || 1)
    let list;
    try {
        if (type) {
            list = await model.tool.findAll({where: {type: type}});
        } else {
            list = await model.tool.findAll();
        }
    } catch (e) {
        list = [
            {
                url: 'http://www.baidu.com',
                title: 'MDN',
                description: '火狐开发者网站',
                bg_url: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }
        ];
    }
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

module.exports = toolController

function f() {
    console.log(4444)
}