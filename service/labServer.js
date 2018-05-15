const model = require('../middleware/model')

// calcData(result),定义映射规则
class labServer {
    async getLabList({page = -1, size = 10, calcData} = {}) {
        let result;
        try {
            result = await model.lab.findAll(
                page === -1 ? {} : {
                    limit: size,
                    offset: (page - 1) * size
                }
            );
            if (typeof calcData === 'function') {
                result = calcData(result)
            }
        } catch (e) {
            result = []
        }
        return result
    }
}

module.exports = new labServer();