const model = require('../middleware/model');
const baseServer = require('./baseServer');
const templateServer = require('./templateServer');

// calcData(result),定义映射规则
class articleServer extends baseServer {
    /**
     *获取文章列表，包括对应分类
     * @returns {Promise<*>}
     * @param arg
     * @param calcData
     */
    async getDataListWithTagCount(arg, {calcData} = {}) {
        let options = this.filterParams(arg);
        let queryResult, result;
        try {
            queryResult = await model.article.findAndCountAll(
                Object.assign(options, {
                    attributes: ['auth', 'updatedAt', 'id', 'index', 'title', 'description', 'bg_url'],
                    'include': [
                        {
                            'model': model.relationship_tag,
                            attributes: ['tag_id'],
                            'include': [
                                {
                                    'model': model.tag,
                                    attributes: ['title', 'key_word']
                                }
                            ]
                        }, {
                            'model': model.click
                        }
                    ],
                    distinct: true
                })
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
        return result;
    }

    /**
     * 获取文章列表
     * @returns {Promise<*>}
     */
    async getDataListAndCount(arg) {
        let options = this.filterParams(arg);
        let result;
        try {
            result = await model.article.findAndCountAll({
                ...options,
                order: [
                    ['createdAt', "DESC"]
                ]
            })
        } catch (e) {
            result.roes = [];
            result.count = 0
        }
        return result
    }

    /**
     * 根据文章id获取文章内容
     * @param id
     * @returns {Promise<Array>}
     */
    async getContentByArticleId(article_id) {
        try {
            return await model.article_content.find({where: {article_id: article_id}})
        } catch (e) {
            return []
        }
    }

    async getContentByContentId(id) {
        try {
            return await model.article_content.find({where: {id}})
        } catch (e) {
            return null
        }
    }

    /**
     * 获取文章类型为article的文章
     * @param keyWord
     * @returns {Promise<{}>}
     */
    async getFullArticleByIndex(keyWord) {
        return await  this.getFullArticle({}, keyWord)
    }

    /**
     * 获取文章id为article的文章
     * @param keyWord
     * @returns {Promise<{}>}
     */
    async getFullArticleById(id) {
        return await  this.getDataListWithTagCount({query: {id}})
    }

    /**
     * 获取文章类型，并对类型进行筛选
     * @param type
     * @param keyword
     * @returns {Promise<{}>}
     */
    async getFullArticleFilterType(type, keyword) {
        return await  this.getFullArticle({type}, keyword)
    };

    /**
     *
     * @param tag 文章tag，默认无
     * @param type 默认article
     * @param keyWord 文章那索引
     * @returns {Promise<{}>}
     */
    async getFullArticle({tag = null, type = null} = {}, keyWord) {
        const query = {article_type: 'article'};
        if (tag) {
            Object.assign(query, {tag})
        } else if (type) {
            Object.assign(query, {article_type: type})
        }
        const list = await this.getDataListWithTagCount({query});
        const result = {};
        const currentIndex = list.findIndex((value) => {
            return value.index === keyWord
        });
        let templateAndContent = await Promise.all([
            await templateServer.findTemplateByArticleId(list[currentIndex].id),
            await this.getContentByArticleId(list[currentIndex].id)
        ]);

        Object.assign(result, {template: templateAndContent[0]});
        Object.assign(result, {currentContent: templateAndContent[1]});

        if (currentIndex > -1) {
            Object.assign(result, {
                current: list[currentIndex]
            });
            if (currentIndex > 0) {
                Object.assign(result, {
                    pre: list[currentIndex - 1]
                })
            }
            if (currentIndex + 1 < list.length) {
                Object.assign(result, {
                    next: list[currentIndex + 1]
                })
            }
        }
        return result
    };

    async getReadCountSub() {
        const rows = (await this.getReadCount()).rows;
        let sum = 0;
        for (let value of rows) {
            sum += value.click_count
        }
        return sum;
    }

    async getReadCount() {
        try {
            return await model.click.findAndCountAll()
        } catch (e) {
            return {rows: [], count: 0}
        }
    }

    /**
     * 增加文章基本信息
     * @returns {Promise<void>}
     */
    async addBasicInfo(obj, key_word) {
        const data = new Date();
        let index = `${data.getFullYear()}/${data.getMonth() + 1}/${data.getDate()}/${key_word}`;
        try {
            return await model.article.create({
                ...obj,
                index
            });
        } catch (e) {
            return false;
        }
    }

    /**
     * 更新文章基本信息
     * @returns {Promise<void>}
     */
    async updateBasicInfo(obj, id) {
        try {
            return await  model.article.update(obj, {where: {id}});
        } catch (e) {
            return null
        }
    }

    async deleteById(id) {
        try {
            return await  model.article.destroy({where: {id}});
        } catch (e) {
            return null
        }
    }

    async createContent(obj) {
        try {
            return await model.article_content.create(obj)
        } catch (e) {
            return null
        }
    }

    async updateContent(obj, id) {
        try {
            return await model.article_content.update(obj, {where: {id}});
        } catch (e) {
            return null
        }
    }

    async deleteContent(id) {
        try {
            return await model.article_content.destroy({where: {id}});
        } catch (e) {
            return null
        }
    }
}

module.exports = new articleServer();