const administratorAccountService = require("../../../service/administratorAccountService");
const formatResponse = require("../../../common/formatResponse");

class adminController {
    async add(ctx, next) {
        const {id, name, avatar, password} = ctx.request.body;
        const result = await administratorAccountService.createAdmin({
            id, name, avatar, password
        });
        if (result) {
            ctx.body = formatResponse.success({
                id, name, avatar
            })
        } else {
            ctx.body = formatResponse.error("id need unique")
        }
    }

    async getAdmin(ctx, next) {
        const result = await administratorAccountService.getAdminById(ctx.query.id);
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("search db error")
        }
    }

    async getList(ctx, next) {
        const result = await administratorAccountService.getAdminList();
        ctx.body = formatResponse.success({...result, d: ctx.query.user})
    }

    async delete(ctx, next) {
        const result = await administratorAccountService.deleteAdminById(ctx.request.body.id);
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("delete db error")
        }
    }

    async update(ctx, next) {
        const {id, name, avatar, password} = ctx.request.body;
        const result = await administratorAccountService.updateAdminById({name, avatar, password}, id);
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("update db error")
        }
    }
}

module.exports = new adminController();