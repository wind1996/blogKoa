const db = require('../middleware/db');
//资源
module.exports = db.defineModel('tag', {
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
    key_word: {
        type: db.STRING(200),
        allowNull: true
    },
    color: {
        type: db.STRING(200),
    },
    online: {
        type: db.BOOLEAN,
    },
    type: {
        type: db.STRING(200)
    }
});
