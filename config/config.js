const dev_config = require('./dev_config');
const prod_config = require('./dev_config');
const util = require('../common/util');
const baseConfig = {
    db_config: {
        dialect: 'mysql',
        database: 'blog',
        username: '',
        password: '',
        host: '',
        port: 3306,
    }
};
const config = {...baseConfig};
const environment = (process.env.NODE_ENV === undefined) ? 'dev' : process.env.NODE_ENV.replace(/\s/g, "").toLowerCase();
if (environment === 'dev') {
    util.deepAssign(config, dev_config);
} else if (environment === 'release') {
    util.deepAssign(config, prod_config);
}

module.exports = config;