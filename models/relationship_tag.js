const db = require('../middleware/db');
module.exports = db.defineModel('relation_tag', {
    id: {
        type: db.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    article_id: {
        type: db.INTEGER
    },
    tag_id: {
        type: db.INTEGER
    }
});
