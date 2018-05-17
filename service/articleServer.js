const model = require('../middleware/model')
const baseServer = require('./baseServer');

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
        let result;
        try {
            result = await model.article.findAll(
                Object.assign(options, {
                    attributes: ['id', 'index', 'title', 'description', 'bg_url', 'click_count'],
                    'include': [
                        {
                            'model': model.relationship_tag,
                            attributes: ['tag_id'],
                            'include': [
                                {
                                    'model': model.tag,
                                    attributes: ['title']
                                }
                            ]
                        }
                    ]
                })
            );
            if (typeof calcData === 'function') {
                result = calcData(result)
            }
        } catch (e) {
            result = []
        }
        return result;
    }

    async getFullArticle(keyWord, ctx) {
        const list = await this.getDataList();
        const result = {};
        const currentIndex = list.findIndex((value) => {
            return value.index === keyWord
        });

        if (currentIndex > -1) {
            Object.assign(result, {
                current: list[currentIndex]
            });
            if (currentIndex - 1 > 0) {
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
        Object.assign(result, {
            currentContent: await model.article_content.find({where: {id: list[currentIndex].id}})
        });
        return result
    }
}

module.exports = new articleServer();