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

    async getToolById(id) {
        try {
            return await model.tool.findOne({where: {id}})
        } catch (e) {
            return null;
        }
    }

    async addTool(obj) {
        try {
            return await  model.tool.create(obj);
        } catch (e) {
            return null
        }
    }

    async updateTool(obj, id) {
        try {
            return await  model.tool.update(obj, {where: {id}});
        } catch (e) {
            return null
        }
    }

    async deleteToolnById(id) {
        try {
            return await  model.tool.destroy({where: {id}});
        } catch (e) {
            return null
        }
    }
}

module.exports = new toolServer();