const db = require('../middleware/db');

module.exports = db.defineModel('click', {
    id: {
        type: db.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    article_id: {
        type: db.INTEGER,
        defaultValue: 0
    },
    click_count: {
        type: db.INTEGER,
        defaultValue: 0
    }
})