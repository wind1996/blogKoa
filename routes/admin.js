const router = require('koa-router')();
const admin = require('../controller/adminController')

router.prefix('/admin');

router.get('/', function (ctx, next) {
    ctx.body = {
        title: 'admin koa'
    }
});
router.get('/ss', admin.cc)

module.exports = router;