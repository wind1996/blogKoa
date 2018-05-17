var article = {};
article.render = async function (ctx, next) {
    const {year, month, day, index} = ctx.params
    let str = (`${year}/${month}/${day}/${index}`);
    const result = await require('../../service/articleServer').getFullArticle(str);
    /*ctx.body = {
        11: aa
    };*/
    let pre_next = {}
    if (result.pre) {
        pre_next.pre = {
            href: `/article/${result.pre.index}`,
            title: result.pre.title
        }
    }
    if (result.next) {
        pre_next.next = {
            href: `/article/${result.next.index}`,
            title: result.next.title
        }
    }
    await ctx.render('page/article/article', {
        title: '博客-文章页',
        headerCustom: false,
        content: {
            body:
            `${JSON.stringify(result)}` +
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
            'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
            'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
            'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
            'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
            'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
            '</p>\n' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
            'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
            'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
            'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
            'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
            'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
            '</p>\n' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
            'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
            'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
            'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
            'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
            'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
            '</p>',
            title: result.current.title,
            ...pre_next,
            auth: '作者',
            created_time: '2018年10月2日',
            updated_time: '2018年11月9日',
            footer: ["<h2>脚注HTML</h2>", `${str}`],
            category: [
                {href: 'www.qq.com', name: '自动化'},
                {href: 'www.qq.com', name: '自动化'},
                {href: 'www.qq.com', name: '自动化'},
                {href: 'www.163.com', name: 'Node'},
                {href: 'www.163.com', name: 'node 后端'}
            ]
        },
        recommendList: [
            {title: '入门webpack基础和实战', href: '/'},
            {title: 'gulp入门到精通', href: '/'},
            {title: '精通js', href: '/'},
            {title: 'css入门', href: '/'},
            {title: 'html入门', href: '/'},
            {title: 'node 入门', href: '/'}
        ]
    });
};
module.exports = article;