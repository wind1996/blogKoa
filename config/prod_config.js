/**
 * 线上环境的配置
 * @type {{dialect: string, database: string, username: string, password: string, host: string, port: number}}
 */
module.exports = {
    db_config: {
        dialect: 'mysql',
        database: 'blog',
        username: 'root',
        password: '',
        host: 'localhost',
        port: 3306
    }
};