const router = require('koa-router')();
const toolController = require('../controller/tool/toolController')
const labController = require('../controller/lab/labController')
const homeController = require('../controller/home/homeController')
const reprintController = require('../controller/article/reprintController')
const originalListController = require('../controller/article/originListController')
const baseController = require('../controller/baseController')

router.get('/', homeController.render)
router.get('/original', originalListController.listRender);
router.get('/originalL', originalListController.recordRender);
router.get('/statistics', originalListController.getStatistics);

router.get('/reprint/category', reprintController.render);
router.get('/reprint', reprintController.render);
router.get('/tool', toolController.render);
router.get('/tool/category', toolController.categoryRender);
router.get('/lab', labController.render);
router.get('/lab/category', labController.render);

router.get('/about', baseController.aboutRender);

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
});

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})


module.exports = router
