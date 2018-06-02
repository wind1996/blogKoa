const router = require("koa-router")();
const admin = require("../controller/api/admin/adminController");
const LogIn = require("../controller/api/admin/LongIn");
const verificationToken = require("../middleware/verificationtoken");
const verification = require("../middleware/verification");
const adminController = require("../controller/api/admin/adminController");
const toolManage = require("../controller/api/admin/toolManage");
const labManage = require("../controller/api/admin/labManage");
const recommendManage = require("../controller/api/admin/recommendManage");
const templateManage = require("../controller/api/admin/templateManage");
const linkManage = require("../controller/api/admin/linkManage");
const tagManage = require("../controller/api/admin/tagManage");
const articleManage = require("../controller/api/admin/articleManage");
const albumManager = require("../controller/api/admin/albumManager");

router.prefix('/admin');

router.post('/logIn', verification.paramsNotNull(["administrator_id", "password"]), LogIn.logIn);

router.all('/*', verificationToken.verification);

router.get('/administrator/collection', adminController.getList);
router.get('/administrator', verification.queryNotNull(["id"]), adminController.getAdmin);
router.post('/administrator', verification.paramsNotNull(["id", "name", "password"]), adminController.add);
router.put('/administrator', verification.paramsNotNull(["id"]), adminController.update);
router.del('/administrator', verification.paramsNotNull(["id"]), adminController.delete);

router.get('/tool/collection', toolManage.List);
router.get('/tool', verification.queryNotNull(["id"]), toolManage.get);
router.post('/tool', verification.paramsNotNull(["title", "type", "url", "bg_url"]), toolManage.add);
router.put('/tool', verification.paramsNotNull(["id"]), toolManage.update);
router.del('/tool', verification.paramsNotNull(["id"]), toolManage.delete);

router.get('/lab/collection', labManage.List);
router.get('/lab', verification.queryNotNull(["id"]), labManage.get);
router.post('/lab', verification.paramsNotNull(["title", "url", "bg_url"]), labManage.add);
router.put('/lab', verification.paramsNotNull(["id"]), labManage.update);
router.del('/lab', verification.paramsNotNull(["id"]), labManage.delete);

router.get('/recommend/collection', recommendManage.List);
router.get('/recommend', verification.queryNotNull(["id"]), recommendManage.get);
router.post('/recommend', verification.paramsNotNull(["title"]), recommendManage.add);
router.put('/recommend', verification.paramsNotNull(["id"]), recommendManage.update);
router.del('/recommend', verification.paramsNotNull(["id"]), recommendManage.delete);

router.get('/template/collection', templateManage.List);
router.get('/template', verification.queryNotNull(["id"]), templateManage.get);
router.post('/template', verification.paramsNotNull(["title", "content"]), templateManage.add);
router.put('/template', verification.paramsNotNull(["id"]), templateManage.update);
router.del('/template', verification.paramsNotNull(["id"]), templateManage.delete);

router.get('/link/collection', linkManage.List);
router.get('/link', verification.queryNotNull(["id"]), linkManage.get);
router.post('/link', verification.paramsNotNull(["title", "url"]), linkManage.add);
router.put('/link', verification.paramsNotNull(["id"]), linkManage.update);
router.del('/link', verification.paramsNotNull(["id"]), linkManage.delete);

router.get('/tag/collection', tagManage.List);
router.get('/tag', verification.queryNotNull(["id"]), tagManage.get);
router.post('/tag', verification.paramsNotNull(["title"]), tagManage.add);
router.put('/tag', verification.paramsNotNull(["id"]), tagManage.update);
router.del('/tag', verification.paramsNotNull(["id"]), tagManage.delete);

router.get('/album/collection', albumManager.list);
router.get('/album', verification.queryNotNull(["id"]), albumManager.get);
router.post('/album', verification.paramsNotNull(["title"]), albumManager.add);
router.put('/album', verification.paramsNotNull(["id"]), albumManager.update);
router.del('/album', verification.paramsNotNull(["id"]), albumManager.remove);

router.get('/article/collection', articleManage.List);
router.get('/article', verification.queryNotNull(["id"]), articleManage.get);
router.post('/article', verification.paramsNotNull(["title"]), articleManage.addBasicInfo);
router.put('/article', verification.paramsNotNull(["id"]), articleManage.updateBasicInfo);
router.del('/article', verification.paramsNotNull(["id"]), articleManage.delete);

router.get('/article/content', verification.queryNotNull(["id"]), articleManage.getContent);
router.post('/article/content', verification.paramsNotNull(["article_id", "content"]), articleManage.addContent);
router.put('/article/content', verification.paramsNotNull(["id"]), articleManage.updateContent);
router.del('/article/content', verification.paramsNotNull(["id"]), articleManage.deleteContent);

router.get('/article/tag', verification.queryNotNull(["article_id"]), articleManage.getTagList);
router.post('/article/tag', verification.paramsNotNull(["article_id", "tag_id"]), articleManage.addTag);
router.del('/article/tag', verification.paramsNotNull(["id"]), articleManage.deleteTag);

router.get('/article/album/collection', verification.queryNotNull(["album_id"]), articleManage.getArticleThroughAlbumList);
router.post('/article/album', verification.paramsNotNull(["article_id", "album_id"]), articleManage.addAlbum);
router.del('/article/album', verification.paramsNotNull(["id"]), articleManage.deleteArticleAlbum);

router.get('/article/template', verification.queryNotNull(["article_id"]), articleManage.getTemplateList);
router.post('/article/template', verification.paramsNotNull(["article_id", "html_id"]), articleManage.addTemplate);
router.put('/article/template', verification.paramsNotNull(["id"]), articleManage.updateTemplate);
router.del('/article/template', verification.paramsNotNull(["id"]), articleManage.deleteTemplate);


module.exports = router;