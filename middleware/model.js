const fs = require('fs');
const db = require('./db');

let files = fs.readdirSync('./models');
let js_files = files.filter((file) => {
    return file.endsWith('.js');
}, files);

const model = {};

for (let js_file of js_files) {
    console.log(`import model from file ${js_file}`);
    let name = js_file.replace(/\.js$/, '');
    model[name] = require('../models/' + js_file)
}

model.sync = async () => {
    await db.sync();
};

model.sequelize = db.sequelize;
module.exports = model;