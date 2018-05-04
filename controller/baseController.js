const baseController = {};
baseController.aboutRender = async function (ctx, next) {
    await ctx.render('page/about', {
        title: '个人介绍页面'
    })
};

module.exports = baseController