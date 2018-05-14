const db = require('../middleware/db');
module.exports = db.defineModel('recommend', {
    id: {
        type: db.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    title: db.STRING(100),
    description: {
        type: db.STRING(200),
        allowNull: true
    },
    source: {
        type: db.STRING(200),
        allowNull: true
    },
    url: {
        type: db.STRING(100),
        allowNull: true
    },
    click_count: {
        type: db.INTEGER,
        defaultValue: 0
    },
    online: {
        type: db.BOOLEAN,
        defaultValue: false
    },
});