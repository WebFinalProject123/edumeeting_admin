var express = require('express');
var router = express.Router();

/* GET home page. */
const studentController = require('../components/students/studentController')

router.get('/',studentController.list);

router.get('/studentDetail/:id', studentController.showUpdate)

module.exports = router;



