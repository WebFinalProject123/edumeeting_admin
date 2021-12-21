var express = require('express');
var router = express.Router();

/* GET home page. */
const studentController = require('../components/students/studentController')

router.get('/',studentController.list);

module.exports = router;
