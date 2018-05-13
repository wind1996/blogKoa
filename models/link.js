const db = require('../middleware/db');
//实验室
module.exports = db.defineModel('link', {
    id: {
        type: db.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: db.STRING(100),
    description: {
        type: db.STRING(200),
        allowNull: true
    },
    url: {
        type: db.STRING(100),
        allowNull: true
    },
    color: {
        type: db.STRING(100),
        allowNull: true
    },
    type: {
        type: db.STRING(100),
        allowNull: true
    },
    bg_url: {
        type: db.STRING(100),
        allowNull: true
    },
    online: {
        type: db.BOOLEAN,
    }
});
