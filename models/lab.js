const db = require('../middleware/db');
//实验室
module.exports = db.defineModel('lab', {
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
    url: {
        type: db.STRING(100),
        allowNull: true
    },
    bg_url: {
        type: db.STRING(100),
        allowNull: true
    },
    location: {
        type: db.STRING(100),
        allowNull: true
    },
    online: {
        type: db.BOOLEAN,
    },
    click_count: {
        type: db.INTEGER,
    },
    like_count: {
        type: db.INTEGER,
    }
});
