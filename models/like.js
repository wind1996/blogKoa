const db = require('../middleware/db');

module.exports = db.defineModel('like', {
    id: {
        type: db.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    article_id: {
        type: db.INTEGER
    },
    like_count: {
        type: db.INTEGER,
        defaultValue: 0
    }
})