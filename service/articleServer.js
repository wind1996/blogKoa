const model = require('../middleware/model')
const baseServer = require('./baseServer');
const templateServer = require('./templateServer')

// calcData(result),定义映射规则
class articleServer extends baseServer {
    /**
     *
     * @returns {Promise<*>}
     * @param arg
     * @param calcData
     */
    async getDataList(arg, {calcData} = {}) {
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

    async getContentByArticleId(id) {
        let result = []
        try {
            result = await model.article_content.find({where: {id: id}})
        } catch (e) {

        }
        return result;
    }

    async getFullArticle(keyWord, ctx) {
        const list = await this.getDataList();
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
    }
}

module.exports = new articleServer();