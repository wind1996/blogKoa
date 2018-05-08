const aboutController = {};
aboutController.meRender = async function (ctx, next) {
    await ctx.render('page/about/me', {
        title: '个人介绍',
        content: {
            body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
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
            title: '自我介绍',
            auth: '作者',
            created_time: '2018年10月2日',
            updated_time: '2018年11月9日',
            header: ["<h2>头注HTML</h2>", '脚注html'],
            footer: ["<h2>脚注HTML</h2>", '脚注html']
        },
    })
};
aboutController.dynamicRender = async function (ctx, next) {
    await ctx.render('page/about/dynamic', {
        title: '动态'
    })
};
aboutController.linksRender = async function (ctx, next) {
    await ctx.render('page/about/links', {
        title: '友链',
        linkGroup: [
            {
                name: '名称',
                links: [
                    {href: 'www.qq.com', name: '慕课网 imooc', color: '#eee'},
                    {href: 'www.qq.com', name: '慕课网 imooc', color: '#f8ff2a'},
                    {href: 'www.qq.com', name: '阮一峰网络日志', color: '#ffe88f'},
                    {href: 'www.qq.com', name: '阮一峰网络日志', color: '#b0ff54'},
                    {href: 'www.qq.com', name: '新空间新生活', color: '#69b5ff'},
                    {name: '第一条信息链接，第一条信息链接'},
                    {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'},
                    {href: 'www.qq.com', name: '第一条信息链接，第一条信息链接'}
                ]
            }
        ]
    })
};

module.exports = aboutController