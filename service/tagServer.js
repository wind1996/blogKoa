const model = require('../middleware/model')
const baseServer = require('./baseServer');

// calcData(result),定义映射规则
class tagServer extends baseServer {
    async getDataList(arg, {calcData} = {}) {
        let options = this.filterParams(arg);
        let result;
        try {
            result = await model.tag.findAll(
                options
            );
            if (typeof calcData === 'function') {
                result = calcData(result)
            }
        } catch (e) {
            result = []
        }
        return result
    }

    async getArticleListByTag(arg, key_word) {

        let tag_id = (await model.tag.find({
            where: {key_word},
            // attributes: [],
            // 'include': [
            // {
            //        attributes: ['article_id'],
            //       'model': model.relationship_tag,
            // 'include': [
            //     {
            //         'model': model.article,
            //         'include': [
            //             {
            //                 'model': model.relationship_tag,
            //                 attributes: ['tag_id'],
            //                 'include': [
            //                     {
            //                         // attributes: [''],
            //                         'model': model.tag,
            //                     }
            //                 ]
            //             }
            //         ]
            //     }
            // ]
            //   }
            // ]
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
}

module.exports = new tagServer();