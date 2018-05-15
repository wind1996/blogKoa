const model = require('../middleware/model');
const baseServer = require('./baseServer');

// calcData(result),定义映射规则
class toolServer extends baseServer {
    /**
     *
     * @param page 页码，默认不分页
     * @param size 每页的条数默认10
     * @param calcData 对数据库插叙结果处理的函数，参数是查询结果，需要返回处理后的数组
     * @param query 查询条件，为空的话不启用
     * @returns {Promise<*>}
     */
    async getToolList({page = -1, size = 10, calcData, query = {}} = {}) {
        this.filterParams();
        let options = {};
        if (page > 0 && size > 0) {
            Object.assign(options, {
                limit: size,
                offset: (page - 1) * size
            })
        }
        if (Object.keys(query).length) {
            Object.assign(options, {
                where: query
            })
        }
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