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
    async getArticleList(arg, {calcData} = {}) {
        let options = this.filterParams(arg);
        let result;
        try {
            result = await model.article.findAll(
                Object.assign(options, {
                    attributes: ['index', 'title', 'description', 'bg_url', 'click_count'],
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
}

module.exports = new articleServer();