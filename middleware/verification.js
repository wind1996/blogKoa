const formatResponse = require("../common/formatResponse")

class verification {
    paramsNotNull(arr) {
        return async (ctx, next) => {
            for (let value of arr) {
                if (!ctx.request.body[value]) {
                    ctx.body = formatResponse.error(`${value} is required`);
                    return
                }
            }
            await next()
        }
    }

    queryNotNull(arr) {
        return async (ctx, next) => {
            for (let value of arr) {
                if (!ctx.query[value]) {
                    ctx.body = formatResponse.error(`${value} is required`);
                    return
                }
            }
            await next()
        }
    }


}

module.exports = new verification();