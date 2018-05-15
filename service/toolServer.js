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
    async getToolList(arg, {calcData} = {}) {
        let options = this.filterParams(arg);
        let result;
        try {
            result = await model.tool.findAll(options);
            if (typeof calcData === 'function') {
                result = calcData(result)
            }
        } catch (e) {
            result = []
        }
        return result;
    }
}

module.exports = new toolServer();