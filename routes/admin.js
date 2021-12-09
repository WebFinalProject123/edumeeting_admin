var express = require('express');
var router = express.Router();
const adminController=require('../components/admin/adminControler')
router.get('/', adminController.list)

module.exports = router;