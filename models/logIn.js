const db = require("../middleware/db");
module.exports = db.defineModel('log_in', {
    id: {
        type: db.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    administrator_id: {
        type: db.STRING(100),
    },
    token: {
        type: db.STRING(300)
    },
    ip: {
        type: db.STRING(100)
    }
});