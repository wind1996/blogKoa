const db = require('../middleware/db');
module.exports = db.defineModel('article_content', {
    id: {
        type: db.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    article_id: {
        type: db.INTEGER
    },
    content: {
        type: db.STRING(200),
        allowNull: true
    }
});
