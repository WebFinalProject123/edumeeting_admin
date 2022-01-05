var express = require('express');
var router = express.Router();
const loggedInGuard=require('../middlewares/loggedInGuard')



const indexController= require('../components/index/indexController');

router.get('/', indexController.list);
router.get('/index', indexController.list);

module.exports = router;
