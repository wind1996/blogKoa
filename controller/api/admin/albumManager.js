const albumServer = require("../../../service/albumServer");
const formatResponse = require("../../../common/formatResponse");

class albumManager {
    async add(ctx) {
        const {title, key_word, color, bg_url} = ctx.request.body;
        const result = await albumServer.add({title, key_word, color, bg_url});
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("error")
        }
    }

    async update(ctx) {
        const {title, key_word, color, bg_url, id} = ctx.request.body;
        const result = await albumServer.update({title, key_word, color, bg_url}, id);
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("error")
        }
    }

    async remove(ctx) {
        const result = await albumServer.remove(ctx.request.body.id);
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("error")
        }
    }

    async get(ctx) {
        const result = await albumServer.get(ctx.query.id);
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse("error");
        }
    }

    async list(ctx) {
        const result = await albumServer.list();
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse("error");
        }
    }
}

module.exports = new albumManager();