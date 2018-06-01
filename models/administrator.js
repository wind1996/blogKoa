const db = require("../middleware/db");
module.exports = db.defineModel('administrator', {
    id: {
        type: db.STRING(100),
        primaryKey: true,
        unique: true
    },
    name: db.STRING(100),
    avatar: {
        type: db.STRING(100),
        allowNull: true
    },
    password: {
        type: db.STRING(100)
    }
});