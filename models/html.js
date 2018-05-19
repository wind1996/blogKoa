const db = require('../middleware/db');
//HTML模板
module.exports = db.defineModel('html', {
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
    type: {
        type: db.STRING(200),
        allowNull: true
    },
    content: {
        type: db.STRING(200),
        allowNull: true
    },
    view_count: {
        type: db.INTEGER,
        defaultValue: 0
    },
    online: {
        type: db.BOOLEAN,
        defaultValue: true
    },
    isDelete: {
        type: db.BOOLEAN,
        defaultValue: false
    }
});