const model = require('../middleware/model')
const baseServer = require('./baseServer');

// calcData(result),定义映射规则
class recommendServer extends baseServer {
    async getDataList(arg, {calcData} = {}) {
        let options = this.filterParams(arg);
        let queryResult, result;
        try {
            queryResult = await model.recommend.findAndCountAll(
                options
            );
            if (typeof calcData === 'function') {
                result = calcData(queryResult.rows);
                result.count = queryResult.count
            } else {
                result = queryResult.rows;
                result.count = queryResult.count

            }
        } catch (e) {
            result = [];
            result.count = 0
        }
        return result
    }
}

module.exports = new recommendServer();