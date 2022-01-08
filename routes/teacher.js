var express = require('express');
var router = express.Router();

/* GET home page. */
const teacherController = require('../components/teachers/teacherController')

router.get('/',teacherController.list);


module.exports = router;