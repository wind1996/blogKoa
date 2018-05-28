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
    },
    home: {
        originSize: 6,      //首页原创列表显示数量
        recommendSize: 6,       //首页推荐列表显示数量
        hotOriginSize: 10,       //首页热门原创列表显示数量
        LinkSize: 10       //首页热门原创列表显示数量
    },
    article: {
        originSize: 12,      //首页原创列表显示数量
        recommendSize: 6,       //首页推荐列表显示数量
        statisticsSize: 30    //推荐统计列表显示数量
    },
    lab: {
        pageSize: 12,       //实验室页显示数量
        statisticsSize: 30      //统计列表显示数量
    },
    tool: {
        pageSize: 12,           //工具页显示数量
        statisticsSize: 30   //统计列表显示数量
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