const db = require('../middleware/db');
module.exports = db.defineModel('relation_html', {
    id: {
        type: db.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    article_id: {
        type: db.INTEGER
    },
    html_id: {
        type: db.INTEGER
    },
    position: {
        type: db.STRING(10),
        defaultValue: "bottom"
    },
    order: {
        type: db.INTEGER,
        defaultValue: 0
    }
});
