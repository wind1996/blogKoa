const {articleAdapter} = require('../../common/Adapter');
const articleServer = require('../../service/articleServer');

const article = {
    async render(ctx) {
        const {year, month, day, index} = ctx.params;
        let str = (`${year}/${month}/${day}/${index}`);
        const result = await articleServer.getFullArticleByIndex(str);
        await ctx.render('page/article/article', {
            title: '博客-文章页',
            headerCustom: false,
            content: articleAdapter(result),
            recommendList: [
                {title: '入门webpack基础和实战', href: '/'},
                {title: 'gulp入门到精通', href: '/'},
                {title: '精通js', href: '/'},
                {title: 'css入门', href: '/'},
                {title: 'html入门', href: '/'},
                {title: 'node 入门', href: '/'}
            ]
        });
    }
};

module.exports = article;