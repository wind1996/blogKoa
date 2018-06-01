const toolServer = require("../../../service/toolServer");
const formatResponse = require("../../../common/formatResponse");

class toolManage {
    async add(ctx, next) {
        const {title, description, url, bg_url, online, type} = ctx.request.body;
        const result = await toolServer.addTool({
            title, description, url, bg_url, online, type
        });
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("id need unique")
        }
    }

    async get(ctx, next) {
        const result = await toolServer.getToolById(ctx.query.id);
        ctx.body = formatResponse.success(result)
    }


    async List(ctx, next) {
        const {page, size, type} = ctx.query;
        const params = {page, size};
        if (type) {
            Object.assign(params, {query: {type}})
        }
        const result = await toolServer.getDataList(params);
        ctx.body = formatResponse.success({list: result, count: result.count})
    }


    async delete(ctx, next) {

        const result = await toolServer.deleteToolnById(ctx.request.body.id);
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("delete db error")
        }
    }

    async update(ctx, next) {
        const {title, description, url, bg_url, online, type, id} = ctx.request.body;
        const result = await toolServer.updateTool({
            title, description, url, bg_url, online, type
        }, id);
        if (result) {
            ctx.body = formatResponse.success({result})
        } else {
            ctx.body = formatResponse.error("id need unique")
        }
    }
}

module.exports = new toolManage();