const articleServer = require("../../../service/articleServer");
const tagServer = require("../../../service/tagServer");
const templateServer = require("../../../service/templateServer");
const albumServer = require("../../../service/albumServer");
const formatResponse = require("../../../common/formatResponse");

class articleManage {
    async addBasicInfo(ctx, next) {
        const {title, key_word, description, auth, article_type, allow_comments, album_only, online, bg_url, bg_template, color} = ctx.request.body;
        const result = await articleServer.addBasicInfo({
            title,
            description,
            auth,
            article_type,
            allow_comments,
            album_only,
            online,
            bg_url,
            bg_template,
            color
        }, key_word,);
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("id need unique")
        }
    }

    async get(ctx, next) {
        const result = await  Promise.all([
            await articleServer.getFullArticleById(ctx.query.id),
            await articleServer.getContentByArticleId(ctx.query.id)
        ]);
        ctx.body = formatResponse.success({basic: result[0], content: result[1].content})
    }

    async List(ctx, next) {
        const {page, size} = ctx.query;
        const params = {
            page, size, query: {
                article_type: 'article'
            }
        };
        const result = await articleServer.getDataListAndCount(params);
        ctx.body = formatResponse.success({list: result, count: result.count})
    }

    async delete(ctx, next) {
        const result = await articleServer.deleteById(ctx.request.body.id);
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("delete db error")
        }
    }

    async updateBasicInfo(ctx, next) {
        const {
            title,
            description,
            auth,
            article_type,
            allow_comments,
            album_only,
            online,
            bg_url,
            bg_template,
            color, id
        } = ctx.request.body;
        const result = await articleServer.updateBasicInfo({
            title,
            description,
            auth,
            article_type,
            allow_comments,
            album_only,
            online,
            bg_url,
            bg_template,
            color
        }, id);
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("id need unique")
        }
    }

    async addContent(ctx) {
        const {article_id, content} = ctx.request.body;
        const result = await articleServer.createContent({article_id, content});
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("failed,maybe id not exists")
        }
    }

    async updateContent(ctx) {
        const {article_id, content, id} = ctx.request.body;
        const result = await articleServer.updateContent({article_id, content}, id);
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("failed,maybe id not exists")
        }
    }

    async deleteContent(ctx) {
        const result = await articleServer.deleteContent(ctx.request.body.id);
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("failed,maybe id not exists")
        }
    }

    async getContent(ctx) {
        const result = await articleServer.getContentByContentId(Number(ctx.query.id))
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("not exists")
        }

    }

    async addTag(ctx) {
        const {article_id, tag_id} = ctx.request.body;
        const result = await tagServer.addTagForArticle({article_id, tag_id});
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("not exists")
        }
    }

    async deleteTag(ctx) {
        const result = await tagServer.removeTagForArticle(Number(ctx.request.body.id));
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("not exists")
        }
    }

    async getTagList(ctx) {
        const result = await tagServer.getAllTagForArticle(Number(ctx.query.article_id));
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("not exists")
        }
    }


    async addTemplate(ctx) {
        const {article_id, html_id, position, order} = ctx.request.body;
        const result = await templateServer.addTemplateForArticle({article_id, html_id, position, order});
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("not exists")
        }
    }

    async updateTemplate(ctx) {
        const {article_id, html_id, position, order, id} = ctx.request.body;
        const result = await templateServer.updateTemplateForArticle({article_id, html_id, position, order}, id);
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("not exists")
        }
    }

    async deleteTemplate(ctx) {
        const result = await templateServer.removeTemplateForArticle(Number(ctx.request.body.id));
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("not exists")
        }
    }

    async getTemplateList(ctx) {
        const result = await templateServer.getAllTemplateForArticle(Number(ctx.query.article_id));
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("not exists")
        }
    }


    async getArticleThroughAlbumList(ctx) {
        const result = await albumServer.getArticlesThroughAlbum(Number(ctx.query.album_id));
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("not exists")
        }
    }

    async addAlbum(ctx) {
        const {article_id, album_id} = ctx.request.body;
        const result = await albumServer.addAlbumForArticle({article_id, album_id});
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("not exists")
        }
    }

    async deleteArticleAlbum(ctx) {
        const result = await albumServer.removeAlbumForArticle(Number(ctx.request.body.id));
        if (result) {
            ctx.body = formatResponse.success(result)
        } else {
            ctx.body = formatResponse.error("not exists")
        }
    }


}

module.exports = new articleManage();