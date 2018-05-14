const db = require('../middleware/db');
module.exports = db.defineModel('album', {
    id: {
        type: db.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    title: db.STRING(100),
    key_word: {
        type: db.STRING(200),
        allowNull: true
    },
    color: {
        type: db.STRING(9),
        defaultValue: '#fff'
    },
    bg_url: {
        type: db.STRING(100),
        allowNull: true
    }
});