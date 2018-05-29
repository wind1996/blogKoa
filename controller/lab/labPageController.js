module.exports = {
    async render(ctx) {
        await ctx.render('page/lab/main', {
            title: '实验新页面'
        })

    }
};