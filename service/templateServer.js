const model = require('../middleware/model');
const baseServer = require('./baseServer');

class templateServer extends baseServer {
    async findTemplateByArticleId(articleId) {
        let result;
        try {
            result = model.relationship_html.findAll({
                where: {article_id: articleId},
                attributes: ['id', 'position'],
                'include': [
                    {
                        'model': model.html
                    }
                ]
            })
        } catch (e) {
            result = []
        }
        return result
    }

    async getDataList(arg, {calcData} = {}) {
        let options = this.filterParams(arg);
        let queryResult, result;
        try {
            queryResult = await model.html.findAndCountAll(
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
            return await model.html.findOne({where: {id}})
        } catch (e) {
            return null;
        }
    }

    async add(obj) {
        try {
            return await  model.html.create(obj);
        } catch (e) {
            return null
        }
    }

    async update(params, id) {
        try {
            return await  model.html.update(params, {where: {id}});
        } catch (e) {
            return null
        }
    }

    async deleteById(id) {
        try {
            return await  model.html.destroy({where: {id}});
        } catch (e) {
            return null
        }
    }

    async getAllTemplateForArticle(article_id) {
        try {
            return await model.relationship_html.findAll({
                where: {article_id},
                attributes: ['html_id'],
                'include': [
                    {
                        'model': model.html,
                        // attributes: ['title', 'key_word']
                    }
                ]
            });
        } catch (e) {
            return null;
        }
    }

    async removeTemplateForArticle(id) {
        try {
            return await model.relationship_html.destroy({where: {id}});
        } catch (e) {
            return null;
        }
    }

    async addTemplateForArticle(obj) {
        try {
            return await model.relationship_html.create(obj)
        } catch (e) {
            return null;
        }
    }

    async updateTemplateForArticle(obj, id) {
        try {
            return await model.relationship_html.update(obj, {where: {id}});
        } catch (e) {
            return null;
        }
    }
}

module.exports = new templateServer();