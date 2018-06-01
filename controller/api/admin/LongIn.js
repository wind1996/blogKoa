const administratorAccountService = require("../../../service/administratorAccountService");
const formatResponse = require("../../../common/formatResponse");

module.exports = {

    async logIn(ctx, next) {
        let {administrator_id, password} = ctx.request.body;
        const user = await administratorAccountService.checkPassword(administrator_id, password);
        if (user) {
            const ip = ctx.request.ip;
            const aa = await administratorAccountService.createUserLogIn(administrator_id, ip);
            if (aa) {
                ctx.body = formatResponse.success({
                    user: user,
                    token: aa.token
                });
            } else {
                ctx.body = formatResponse.error("make token error")
            }

        } else {
            ctx.body = formatResponse.error("administrator_id or password error")
        }
    }

};