class formatResponse {
    success(result) {
        return {
            code: 200,
            data: {
                msg: "ok",
                result
            }
        }
    }

    error(msg) {
        return {
            code: 500,
            data: {
                msg
            }
        }
    }

    Unauthorized() {
        return {
            code: 401,
            data: {
                msg: "need Unauthorized"
            }
        }
    }
}

module.exports = new formatResponse();