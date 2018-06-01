const model = require('../middleware/model')
const baseServer = require('./baseServer');

// calcData(result),定义映射规则
class tagServerAndCount extends baseServer {
    async getDataListAndCount(arg, {calcData} = {}) {
        let options = this.filterParams(arg);
        let result;
        try {
            result = await model.tag.findAndCountAll(
                options
            );
            if (typeof calcData === 'function') {
                result.rows = calcData(result.rows)
            }
        } catch (e) {
            result = {
                rows: [],
                count: 0
            }
        }
        return result
    }

    async getArticleListByTag(arg, key_word) {

        let tag_id = (await model.tag.find({
            where: {key_word}
        })).id;
        arg.query = {tag_id}
        let options = this.filterParams(arg);
        let result = await  model.relationship_tag.findAndCountAll({
            ...options,
            ...{
                'include': [
                    {
                        'model': model.article,
                        'include': [
                            {
                                'model': model.relationship_tag,
                                attributes: ['tag_id'],
                                'include': [
                                    {
                                        // attributes: [''],
                                        'model': model.tag,
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            distinct: true
        });
        return {rows: result.rows, count: result.count}
    }

    async getById(id) {
        try {
            return await model.tag.findOne({where: {id}})
        } catch (e) {
            return null;
        }
    }

    async add(obj) {
        try {
            return await  model.tag.create(obj);
        } catch (e) {
            return null
        }
    }

    async update(params, id) {
        try {
            return await  model.tag.update(params, {where: {id}});
        } catch (e) {
            return null
        }
    }

    async deleteById(id) {
        try {
            return await  model.tag.destroy({where: {id}});
        } catch (e) {
            return null
        }
    }

    async addTagForArticle(obj) {
        try {
            return await  model.relationship_tag.create(obj);
        } catch (e) {
            return null
        }
    }

    async removeTagForArticle(id) {
        try {
            return await  model.relationship_tag.destroy({where: {id}});
        } catch (e) {
            return null
        }
    }

    async getAllTagForArticle(article_id) {
        try {
            return await  model.relationship_tag.findAll({
                where: {article_id},
                attributes: ['tag_id'],
                'include': [
                    {
                        'model': model.tag,
                        attributes: ['title', 'key_word']
                    }
                ]
            });
        } catch (e) {
            return null
        }
    }
}

module.exports = new tagServerAndCount();