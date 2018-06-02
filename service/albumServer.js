const model = require('../middleware/model')
const baseServer = require('./baseServer');

class albumServer extends baseServer {
    async add(obj) {
        try {
            return await model.album.create(obj)
        } catch (e) {
            return null
        }
    }

    async update(obj, id) {
        try {
            return await model.album.update(obj, {where: {id}})
        } catch (e) {
            return false;
        }
    }

    async remove(id) {
        try {
            return await model.album.destroy({where: {id}})
        } catch (e) {
            return null
        }
    }

    async get(id) {
        try {
            return await  model.album.findOne({where: {id}})
        } catch (e) {
            return null;
        }
    }

    async list() {
        try {
            return await model.album.findAndCountAll();
        } catch (e) {
            return {
                rows: null,
                count: 0
            }
        }
    }


    async addAlbumForArticle(obj) {
        try {
            return await  model.relationship_album.create(obj);
        } catch (e) {
            return null
        }
    }

    async removeAlbumForArticle(id) {
        try {
            return await  model.relationship_album.destroy({where:{id}});
        } catch (e) {
            return null
        }
    }

    async getArticlesThroughAlbum(album_id) {
        try {
            return await  model.relationship_album.findAll({
                where: {
                    album_id
                }
            });
        } catch (e) {
            return null
        }
    }

}

module.exports = new albumServer();