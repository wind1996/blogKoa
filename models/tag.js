const db = require('../middleware/db');
//资源
module.exports = db.defineModel('tag', {
    id: {
        type: db.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    title:{
        type:db.STRING(100),
        allowNull: true
    },
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
        allowNull: true
    },
    online: {
        type: db.BOOLEAN,
        allowNull: true
    },
    type: {
        type: db.STRING(200),
        allowNull: true
    }
});
