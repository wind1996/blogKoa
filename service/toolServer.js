const model = require('../middleware/model');
const baseServer = require('./baseServer');

// calcData(result),定义映射规则
class toolServer extends baseServer {
    /**
     *
     * @param page 页码，默认不分页
     * @param arg
     * @param calcData 对数据库插叙结果处理的函数，参数是查询结果，需要返回处理后的数组
     * @returns {Promise<*>}
     */
    async getDataList(arg, {calcData} = {}) {
        let options = this.filterParams(arg);
        let result, res;
        try {
            result = await model.tool.findAndCountAll(options);
            res = (typeof calcData === 'function') ? calcData(result.rows) : result.rows;
            res.count = result.count;
        } catch (e) {
            res = [];
            res.count = 0;
        }
        return res;
    }
}

module.exports = new toolServer();