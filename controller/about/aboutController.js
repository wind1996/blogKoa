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
    let list = await require('../../service/linkServer').getDataList();
    let type = new Set(list.map(x => x.type));
    let result_list = [];
    for (let value of type.values()) {
        console.log(2222, value, type);
        result_list.push({
            title: value,
            links: list.filter(x => {
                return x.type === value
            })
        })
    }
    await ctx.render('page/about/links', {
        title: '友链',
        linkGroup: result_list
    })
};

module.exports = aboutController;