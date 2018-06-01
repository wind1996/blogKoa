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

    async getToolById(id) {
        try {
            return await model.lab.findOne({where: {id}})
        } catch (e) {
            return null;
        }
    }

    async add(obj) {
        try {
            return await  model.lab.create(obj);
        } catch (e) {
            return null
        }
    }

    async update(params, id) {
        try {
            return await  model.lab.update(params, {where: {id}});
        } catch (e) {
            return null
        }
    }

    async deleteById(id) {
        try {
            return await  model.lab.destroy({where: {id}});
        } catch (e) {
            return null
        }
    }
}

module.exports = new labServer();