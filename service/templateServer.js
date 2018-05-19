const model = require('../middleware/model');
const baseServer = require('./baseServer');

class templateServer extends baseServer {
    async findTemplateByArticleId(articleId) {
        let result;
        try {
            result = model.relationship_html.findAll({
                where: {article_id: articleId},
                attributes:['id','position'],
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
}

module.exports = new templateServer()