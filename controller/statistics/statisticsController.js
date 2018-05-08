var statisticsController = {}
statisticsController.renderTagPage = async function (ctx, next) {
    await ctx.render('page/statistics/tag', {
        title: '标签大全',
        tagList: [
            {href: 'www.qq.com', name: '标签（1）', color: '#eee'},
            {href: 'www.qq.com', name: '标签（2）', color: '#f8ff2a'},
            {href: 'www.qq.com', name: '标asdas签（2）', color: '#f8ff2a'},
            {href: 'www.qq.com', name: '标签（2）', color: '#f8ff2a'},
            {href: 'www.qq.com', name: '标签（2）', color: '#f8ff2a'},
            {href: 'www.qq.com', name: '标sads签（2）', color: '#f8ff2a'},
            {href: 'www.qq.com', name: '标签（2）', color: '#f8ff2a'},
            {href: 'www.qq.com', name: '标asd签（2）', color: '#f8ff2a'},
            {href: 'www.qq.com', name: '标签（2）', color: '#f8ff2a'},
            {href: 'www.qq.com', name: '标签（2）', color: '#f8ff2a'},
            {href: 'www.qq.com', name: '标签（2）', color: '#f8ff2a'},
            {href: 'www.qq.com', name: '标签（2）', color: '#f8ff2a'},
            {href: 'www.qq.com', name: '标签（2）', color: '#f8ff2a'},
            {href: 'www.qq.com', name: '标签（2）', color: '#f8ff2a'},
            {href: 'www.qq.com', name: '标签（2）', color: '#f8ff2a'},
            {href: 'www.qq.com', name: '标签（3）', color: '#ffe88f'},
            {href: 'www.qq.com', name: '标签（4）', color: '#b0ff54'},
            {href: 'www.qq.com', name: '标签（5）', color: '#69b5ff'}
        ]
    })
}
module.exports = statisticsController