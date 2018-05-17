var db = require('../../middleware/db');
var lab = {};

lab.render = async function (ctx, next) {
    let list = await require('../../service/labServer')
        .getDataList({
            page: 1,
            size: 20,},{
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
        })
    await ctx.render('page/lab/lab', {
        title: '博客-实验室',
        list: list,
        pagination: {
            size: 10,
            sumPage: 10,
            currentPage: 1,
            baseUrl: '/lab?page='
        }
    })
};

lab.categoryRender = async function (ctx, next) {
    let list = await require('../../service/labServer').getDataList() ||
        [
            {
                href: 'http://demo.kongdepeng.com.cn/SmithChart/',
                title: 'SmithChart',
                content: '使用HTML，Canvas制作的史密斯原图工具',
                bg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=310705049,841159833&fm=173&app=25&f=JPEG?w=218&h=146&s=C880DF185182C6EC16542CC6030010A0'
            }
        ]
    await ctx.render('page/statistics/labStatistics', {
        title: '博客-实验室归档',
        list: list,
        pagination: {
            size: 10,
            sumPage: 10,
            currentPage: 6,
            baseUrl: '/lab?page='
        }
    })
};

module.exports = lab