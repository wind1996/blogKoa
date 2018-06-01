const linkServer = require("../../../service/linkServer");
const formatResponse = require("../../../common/formatResponse");

class linkManage {
    async add(ctx, next) {
        const {title, description, url, color, type, bg_url, online} = ctx.request.body;
        const result = await linkServer.add({
            title, description, url, color, type, bg_url, online
        });
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("id need unique")
        }
    }

    async get(ctx, next) {
        const result = await linkServer.getById(ctx.query.id);
        ctx.body = formatResponse.success(result)
    }


    async List(ctx, next) {
        const {page, size, type} = ctx.query;
        const params = {page, size};
        if (type) {
            Object.assign(params, {query: {type}})
        }
        const result = await linkServer.getDataList(params);
        ctx.body = formatResponse.success({list: result, count: result.count})
    }


    async delete(ctx, next) {
        const result = await linkServer.deleteById(ctx.request.body.id);
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("delete db error")
        }
    }

    async update(ctx, next) {
        const {title, description, url, color, type, bg_url, online, id} = ctx.request.body;
        const result = await linkServer.update({
            title, description, url, color, type, bg_url, online
        }, id);
        if (result) {
            ctx.body = formatResponse.success({result})
        } else {
            ctx.body = formatResponse.error("update fail")
        }
    }
}

module.exports = new linkManage();