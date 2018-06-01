const tagServer = require("../../../service/tagServer");
const formatResponse = require("../../../common/formatResponse");

class tagManage {
    async add(ctx, next) {
        const {title, description, key_word, color, online, type} = ctx.request.body;
        const result = await tagServer.add({
            title, description, key_word, color, online, type
        });
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("id need unique")
        }
    }

    async get(ctx, next) {
        const result = await tagServer.getById(ctx.query.id);
        ctx.body = formatResponse.success(result)
    }

    async List(ctx, next) {
        const {page, size, type} = ctx.query;
        const params = {page, size};
        if (type) {
            Object.assign(params, {query: {type}})
        }
        const result = await tagServer.getDataListAndCount(params);
        ctx.body = formatResponse.success({list: result.rows, count: result.count})
    }

    async delete(ctx, next) {
        const result = await tagServer.deleteById(ctx.request.body.id);
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("delete db error")
        }
    }

    async update(ctx, next) {
        const {title, description, key_word, color, online, type, id} = ctx.request.body;
        const result = await tagServer.update({
            title, description, key_word, color, online, type
        }, id);
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("update fail")
        }
    }
}

module.exports = new tagManage();