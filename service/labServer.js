const model = require('../middleware/model');
const baseServer = require('./baseServer');


// calcData(result),定义映射规则
class labServer extends baseServer {
    async getDataList(arg, {calcData} = {}) {
        let options = this.filterParams(arg);
        let result, res;
        try {
            result = await model.lab.findAndCountAll(
                options
            );
            res = (typeof calcData === 'function') ? calcData(result.rows) : result.rows;
            res.count = result.count;
        } catch (e) {
            res = [];
            res.count = 0
        }
        return res
    }
}

module.exports = new labServer();