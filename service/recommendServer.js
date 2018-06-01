const model = require('../middleware/model');
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

    async getById(id) {
        try {
            return await model.recommend.findOne({where: {id}})
        } catch (e) {
            return null;
        }
    }

    async add(obj) {
        try {
            return await  model.recommend.create(obj);
        } catch (e) {
            return null
        }
    }

    async update(params, id) {
        try {
            return await  model.recommend.update(params, {where: {id}});
        } catch (e) {
            return null
        }
    }

    async deleteById(id) {
        try {
            return await  model.recommend.destroy({where: {id}});
        } catch (e) {
            return null
        }
    }
}

module.exports = new recommendServer();