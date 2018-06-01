const model = require('../middleware/model')
const baseServer = require('./baseServer');

// calcData(result),定义映射规则
class linkServer extends baseServer {
    /**
     *
     * @param page 页码，默认不分页
     * @param arg
     * @param calcData 对数据库插叙结果处理的函数，参数是查询结果，需要返回处理后的数组
     * @returns {Promise<*>}
     */
    async getDataList(arg, {calcData} = {}) {
        let options = this.filterParams(arg);
        let result;
        try {
            result = await model.link.findAll(
                options
            );
            if (typeof calcData === 'function') {
                result = calcData(result)
            }
        } catch (e) {
            result = []
        }
        return result;
    }

    async getById(id) {
        try {
            return await model.link.findOne({where: {id}})
        } catch (e) {
            return null;
        }
    }

    async add(obj) {
        try {
            return await  model.link.create(obj);
        } catch (e) {
            return null
        }
    }

    async update(params, id) {
        try {
            return await  model.link.update(params, {where: {id}});
        } catch (e) {
            return null
        }
    }

    async deleteById(id) {
        try {
            return await  model.link.destroy({where: {id}});
        } catch (e) {
            return null
        }
    }
}

module.exports = new linkServer();