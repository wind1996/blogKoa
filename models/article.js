const db = require('../middleware/db');
module.exports = db.defineModel('article', {
    id: {
        type: db.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    index: {
        type: db.STRING(100),
        allowNull: false
    },
    title: {
        type: db.STRING(100)
    },
    description: {
        type: db.STRING(200),
        allowNull: true
    },
    auth: {
        type: db.STRING(20),
        allowNull: true
    },
    click_count: {
        type: db.INTEGER,
        defaultValue: 0
    },
    like_count: {
        type: db.INTEGER,
        defaultValue: 0
    },
    allow_comments: {
        type: db.BOOLEAN,
        defaultValue: true
    },
    album_only: {
        type: db.BOOLEAN,
        defaultValue: false
    },
    online: {
        type: db.BOOLEAN,
        defaultValue: true
    },
    delete: {
        type: db.BOOLEAN,
        defaultValue: false
    },
    bg_template: {
        type: db.STRING(100),
        allowNull: true
    },
    bg_url: {
        type: db.STRING(100),
        allowNull: true
    },
    color: {
        type: db.STRING(9),
        defaultValue: '#fff'
    }
});
