var article = {};
const util = require('../../util/util');
article.render = async function (ctx, next) {
    const {year, month, day, index} = ctx.params
    let str = (`${year}/${month}/${day}/${index}`);
    const result = await require('../../service/articleServer').getFullArticle(str);
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
            `${JSON.stringify(result.currentContent.content)}` +
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
            auth: result.current.auth,
            created_time: result.current.updatedAt,
            updated_time: util.formatDate(result.current.updatedAt),
            header: result.template.filter(x => x.position === 'top').map(x => x.html.content),
            footer: result.template.filter(x => x.position === 'bottom').map(x => x.html.content),
            category: result.current.relation_tags.map(x => {
                return {
                    href: `/tag/${x.tag.key_word}`,
                    name: x.tag.title
                }
            })
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