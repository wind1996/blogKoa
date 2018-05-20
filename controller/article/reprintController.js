const {recommendAdapter} = require('../../common/Adapter');
const recommendServer = require('../../service/recommendServer')
var data = {
    title: '博客-转载',
    reprintList: [
        {
            title: '这是标题',
            list: [
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
            ]
        },
        {
            title: '这是标题',
            list: [
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
            ]
        },
        {
            title: '这是标题',
            list: [
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
            ]
        },
        {
            title: '这是标题',
            list: [
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
            ]
        },
        {
            title: '这是标题',
            list: [
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
            ]
        },
        {
            title: '这是标题',
            list: [
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
            ]
        }
    ],
    articleRecommendList: [
        {
            title: '一周精通VUE JS',
            from: '掘金',
            detail: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
            href: 'www.baidu.com'
        },
        {
            title: '一周精通VUE JS',
            from: '掘金',
            detail: 'loremm lorem orem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
            href: 'www.baidu.com'
        },
        {
            title: '一周精通VUE JS',
            from: '掘金',
            detail: 'lorem  lorem lorem loreem lorem lorem lorem lorem ',
            href: 'www.baidu.com'
        },
        {
            title: '一周精通VUE JS',
            from: '掘金',
            detail: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
            href: 'www.baidu.com'
        },
        {
            title: '一周精通VUE JS',
            from: '掘金',
            detail: '我肯定超了lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
            href: 'www.baidu.com'
        },
        {
            title: '一周精通VUE JS',
            from: '掘金',
            detail: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
            href: 'www.baidu.com'
        }
    ],
    pagination: {
        size: 10,
        sumPage: 100,
        currentPage: 1,
        baseUrl: '/reprint?page='
    }
};

const reprintController = {
    async render(ctx, next) {
        const type = ctx.query.type ? ctx.query.type.split(',') : [];
        console.log(type.length === 0)
        if (type.length === 0) {
            await ctx.render('page/reprint/reprint', data);
        } else if (type.includes('follow')) {
            await ctx.render('page/reprint/reprint-follow', data);
        } else {
            await ctx.render('page/reprint/reprint-recommended', data);
        }
    },
    async renderStatistics(ctx, next) {
        await ctx.render('page/statistics/reprintStatistics', data)
    },
    async recommend(ctx, next) {
        let page = Number(ctx.query.page) || 1;
        let size = Number(ctx.query.size) || 6;
        let result = await recommendServer.getDataList({page, size}, {
            calcData(list) {
                return recommendAdapter(list)
            }
        });

        await ctx.render('page/reprint/reprint-recommended', {
            articleRecommendList: result,
            pagination: {
                currentPage: page,
                baseUrl: `/recommend?size=${size}&page=`,
                sumPage: Math.ceil(result.count / size),
                size: 7
            }
        })
    }
};

module.exports = reprintController;