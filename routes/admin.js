var express = require('express');
var router = express.Router();
const adminController = require('../components/admin/adminControler')
router.get('/', adminController.list)
router.post('/changeAvatar', adminController.changeAvatar)
router.get('/toggle/:action/:userID', adminController.ban)
module.exports = router;