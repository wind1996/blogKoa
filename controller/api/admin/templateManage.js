const templateServer = require("../../../service/templateServer");
const formatResponse = require("../../../common/formatResponse");

class templateManager {
    async add(ctx, next) {
        const {title, description, content, online, type} = ctx.request.body;
        const result = await templateServer.add({
            title, description, content, online, type
        });
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("id need unique")
        }
    }

    async get(ctx, next) {
        const result = await templateServer.getById(ctx.query.id);
        ctx.body = formatResponse.success(result)
    }


    async List(ctx, next) {
        const {page, size, type} = ctx.query;
        const params = {page, size};
        if (type) {
            Object.assign(params, {query: {type}})
        }
        const result = await templateServer.getDataList(params);
        ctx.body = formatResponse.success({list: result, count: result.count})
    }


    async delete(ctx, next) {
        const result = await templateServer.deleteById(ctx.request.body.id);
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("delete db error")
        }
    }

    async update(ctx, next) {
        const {title, description, content, online, type, id} = ctx.request.body;
        const result = await templateServer.update({
            title, description, content, online, type
        }, id);
        if (result) {
            ctx.body = formatResponse.success({result})
        } else {
            ctx.body = formatResponse.error("id need unique")
        }
    }
}

module.exports = new templateManager();