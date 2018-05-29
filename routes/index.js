const router = require('koa-router')();
const toolController = require('../controller/tool/toolController');
const labController = require('../controller/lab/labController');
const homeController = require('../controller/home/homeController');
const reprintController = require('../controller/article/reprintController');
const originalListController = require('../controller/article/originListController');
const aboutController = require('../controller/about/aboutController');
const articleController = require('../controller/article/articleController');
const statisticsController = require('../controller/statistics/statisticsController');
const labPageController = require('../controller/lab/labPageController');

router.get('/', homeController.render);
router.get('/original', originalListController.listRender);
router.get('/originalL', originalListController.recordRender);
router.get('/statistics', originalListController.getStatistics);
router.get('/album', originalListController.listAlbum);

router.get('/article/:year/:month/:day/:index', articleController.render);

router.get('/reprint/category', reprintController.renderStatistics);
// router.get('/reprint', reprintController.render);
router.get('/recommend', reprintController.recommend);
router.get('/tool', toolController.render);
router.get('/tool/category', toolController.categoryRender);
router.get('/lab', labController.render);
router.get('/lab/main', labPageController.render);
router.get('/lab/category', labController.categoryRender);
router.get('/about/me', aboutController.meRender);
router.get('/about/dynamic', aboutController.dynamicRender);
router.get('/about/links', aboutController.linksRender);
router.get('/about/resume', aboutController.linksRender);

// 归档
router.get('/tag', statisticsController.renderTagPage);
router.get('/tag/:tag', originalListController.getArticleByTag);

module.exports = router;