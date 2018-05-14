const db = require('../middleware/db');
module.exports = db.defineModel('relation_album', {
    id: {
        type: db.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    article_id: {
        type: db.INTEGER
    },
    album_id: {
        type: db.INTEGER
    }
});
