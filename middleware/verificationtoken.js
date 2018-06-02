const administratorAccountService = require("../service/administratorAccountService");
module.exports = {
    async verification(ctx, next) {
        const token = ctx.request.header.token;
        if (token) {
            const result = await administratorAccountService.getOneLogInfByToken(token);
            if (result) {
                ctx.query.user = result;
                await next();
            } else {
                ctx.status = 401
            }
        } else {
            ctx.status = 401
        }
    }
};