const model = require('./middleware/model')
require('./middleware/ref')
const fs = require("mz/fs");

(async () => {
    await model.sync();
    let fp = 'init-sql.sql';
    let sqlBuffer = await fs.readFile(fp);
    let sqlStringArray = sqlBuffer.toString('utf-8').split("\n");

    for (let lineSQL of sqlStringArray) {
        if (lineSQL.trim() === '') {
            continue;
        }
        await model.sequelize.query(lineSQL);
    }
    process.exit(0);
})();
