const model = require('../middleware/model')
const baseServer = require('./baseServer');

// calcData(result),定义映射规则
class recommendServer extends baseServer {
    async getDataList(arg, {calcData} = {}) {
        let options = this.filterParams(arg);
        let result;
        try {
            result = await model.recommend.findAll(
                options
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

module.exports = new recommendServer();